//js
const express = require('express');
const {registerView, loginView, registerUser,loginUser} = require('../controllers/loginController');
const { dashboardView, newFriend, addHour, minusHour, deleteFriend, newEvent, loadEvent, newAttendance, logOut } = require("../controllers/dashboardController");
const { protectRoute } = require("../auth/protect");

const router = express.Router();

router.get('/register', registerView);
router.get('/login', loginView);

// REGISTER & LOGIN
router.post('/register', registerUser);
router.post('/login', loginUser);


//DASHBOARD
router.get("/dashboard", protectRoute, dashboardView);

//FRIENDS
// NEW FRIEND
router.post('/dashboard',newFriend);

// ADD HOUR
router.post('/increaseHour',addHour);

// Minus HOUR
router.post('/minusHour',minusHour);

// DELETE FRIEND
router.post('/deleteFriend',deleteFriend);

//EVENTS
//CREATE NEW EVENT 
router.post('/newEvent',newEvent);

//LOAD EVENT
router.get('/event/:id',loadEvent);

//NEW ATTTENDANCE
router.post('/newAttendance',newAttendance);


//Log Out
router.post('/logout', logOut);

module.exports = router;
