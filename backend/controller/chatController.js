const catchAsyncError = require("../middleware/catchAsyncError");


exports.newMessage = catchAsyncError( async (req,res) => {

    res.status(200).json({
        success:true,
        message:"Working"
    })
} )