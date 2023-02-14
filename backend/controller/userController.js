const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const User = require("../model/userModel");
const sendToken = require("../utils/JWTtoken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const ApiFeture = require("../utils/searchFeature")


// register user
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body;

    if (name.trim() === '') {
        return next(new ErrorHandler("Please Enter Your Name!", 400));
    }
    if (email.trim() === '') {
        return next(new ErrorHandler("Please Enter Your Email!", 400));
    }
    if (password.trim() === '') {
        return next(new ErrorHandler("Please Create a Strong Password!", 400));
    }

    const user = await User.create({
        name,
        email: email.toLowerCase(),
        password,
        authType: "native"
    });

    sendToken(user, 201, res);
});

// login user
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    var { email, password } = req.body;
    email = email.toLowerCase();
    if (!email || !password) {
        return next(new ErrorHandler("Please Enter Email and Password", 400));
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        return next(new ErrorHandler("There is no account linked with this Email!", 401));
    }
    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) {
        return next(new ErrorHandler("invalid Email or Password", 401));
    }
    sendToken(user, 200, res);
});

// logout user
exports.logoutUser = catchAsyncErrors(async (req, res, next) => {
    res.cookie("token", null, {
        maxAge: 0,
        httpOnly: true,
        overwrite: true,
    });
    res.status(200).json({
        success: true,
        message: "Logged Out",
    });
});

// forgot password
exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
    let { email } = req.body;
    email = email.toLowerCase().trim();

    if (email === '') {
        return next(new ErrorHandler("Please, Enter your Email!", 400));
    }


    const user = await User.findOne({ email });

    if (!user) {
        return next(new ErrorHandler("no Account linked to this Email!", 404));
    }

    // reset token getting and saving
    const resetToken = user.getResetPasswordToken();
    await user.save({ validateBeforeSave: false });

    //   sending mail
    const resetPasswordURL = `${req.protocol}://${req.get(
        "host"
    )}/password/reset/${resetToken}`;

    const message = `Yout password reset token is:- \n\n ${resetPasswordURL} \n\n if you have not requested this request then please ignore it!!! `;

    try {
        await sendEmail({
            email: user.email,
            subject: `Talkative password Recovery`,
            message,
        });
        res.status(200).json({
            success: true,
            message: `Email sent to ${req.body.email} successfully`,
        });
    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        await user.save({ validateBeforeSave: false });

        return next(new ErrorHandler(error.message, 500));
    }


});

// resetPassword
exports.resetPassword = catchAsyncErrors(async (req, res, next) => {


    // creating token hash
    const resetPasswordToken = crypto
        .createHash("sha256")
        .update(req.params.token)
        .digest("hex");

    let user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
        return next(new ErrorHandler("invalid Reset Password token", 400));
    }

    if ((req.body.password !== req.body.confirmPassword)) {
        return next(new ErrorHandler("password doesn't match!", 400));
    }

    if ((req.body.password.trim() === '')) {
        return next(new ErrorHandler("Please Enter a valid Password!", 400));
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;


    user = await User.findOne({ _id: user._id });


    sendToken(user, 200, res);
})

// to get user data when 1st rendering
exports.userDetails = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id);
    res.status(200).json({
        success: true,
        user,
    });
})

// update password from profile
exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id).select("+password");

    const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

    if (!isPasswordMatched) {
        return next(new ErrorHandler("old Password is incorrect", 400));
    }

    if (req.body.newPassword !== req.body.confirmPassword) {
        return next(new ErrorHandler("Password doesn't match!", 400));
    }
    if (req.body.newPassword.trim() === '') {
        return next(new ErrorHandler("Password cannot be Empty!", 400));
    }

    user.password = req.body.newPassword;
    await user.save();

    sendToken(user, 200, res);
})

// update password from profile
exports.updateProfile = catchAsyncErrors(async (req, res, next) => {
})

exports.searchFriend = catchAsyncErrors(async (req, res, next) => {
    const keyword = req.query.keyword;
    const userID = req.user.id;

    // const nameSearch = new ApiFeture(User.find(), query).searchForName();
    // const emailSearch = new ApiFeture(User.find(), query).searchForEmail();
    // const nameResults = await nameSearch.query;
    // const emailResults = await nameSearch.query;

    const nameResults = await User.find({ name: { '$regex': keyword, '$options': 'i' } })
    const emailResults = await User.find({ email: { '$regex': keyword, '$options': 'i' } })

    var seen = {}
    let searchResult = [...nameResults, ...emailResults].filter((item) => {
        return seen.hasOwnProperty(item.id) ? false : (seen[item.id] = true)
    })

    searchResult = searchResult.filter((i) => {
        if (i.id !== userID) {
            return true
        }
    })


    res.status(200).json({
        success: true,
        searchResult
    });

})
exports.addFriend = catchAsyncErrors(async (req, res, next) => {
    const FriendID = req.params.id;

    const Friend = await User.findById(FriendID);
    if (!Friend) return next(new ErrorHandler("No Friend Selected!", 400));


    let existance = false
    Friend.requests.map((obj) => {
        if (obj.email == req.user.email) {
            existance = true
        }
    })
    // console.log('existance :>> ', existance);

    // * if reqest is alredy sent
    if (existance) return next(new ErrorHandler("Request Already Sent!!", 400));

    // * making of new request
    var newRequests = Friend.requests;
    newRequests.push({
        name: req.user.name,
        email: req.user.email,
        id: req.user.id
    })

    Friend.requests = newRequests
    await Friend.save()

    const user = await User.findById(req.user.id)

    var newSentRequests = user.requestSent
    newSentRequests.push({
        name: Friend.name,
        email: Friend.email,
        id: Friend.id
    })
    user.requestSent = newSentRequests
    await user.save()

    res.status(200).json({ success: true, user })
})

exports.requestJudgment = catchAsyncErrors(async (req, res, next) => {
    const FriendID = req.params.id;
    const acceptance = eval(req.query.accept);

    if (FriendID.trim() === "") return next(new ErrorHandler("No Friend Selected!", 400));
    if (typeof acceptance !== "boolean") return next(new ErrorHandler("None choice Selected!", 400));

    const user = await User.findById(req.user.id);
    const friend = await User.findById(FriendID);

    if (acceptance) {
        //* push cross users in both documents

        //* remove cross requests from both requests and request Sent

    } else {
        //* remove cross requests from both requests and request Sent


    }

    res.status(200).json({
        success: true
    })
})
