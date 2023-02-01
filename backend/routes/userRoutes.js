const express = require('express');
const { registerUser, loginUser, logoutUser, forgotPassword, resetPassword, userDetails, updatePassword, updateProfile, searchFriend } = require('../controller/userController');
const { forRoutineCheck, isAuthenticatedUser } = require('../middleware/auth');

const router = express.Router()


router.route('/user/register').post(registerUser) // done
router.route('/user/login').post(loginUser) // done
router.route('/user/logout').get(logoutUser) // done
router.route("/user/routinecheck").get(forRoutineCheck, userDetails);

router.route('/password/forgot').post(forgotPassword) // done
router.route('/password/reset/:token').post(resetPassword)

router.route("/profile/password/update").put(isAuthenticatedUser, updatePassword);
router.route("/profile/details/update").put(isAuthenticatedUser, updateProfile);

router.route("/friend/search").post( searchFriend)

module.exports = router