const express = require('express');
const { registerUser, loginUser, logoutUser, forgotPassword, resetPassword, userDetails, updatePassword, updateProfile, searchFriend, addFriend, requestJudgment, blockFriend } = require('../controller/userController');
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

router.route("/friend/search").get(isAuthenticatedUser, searchFriend) //done
router.route("/friend/add/:id").get(isAuthenticatedUser, addFriend) //done

router.route("/friend/request/:id").get(isAuthenticatedUser, requestJudgment) //done
router.route("/friend/block/:id").get(isAuthenticatedUser, blockFriend) 

module.exports = router