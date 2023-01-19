const Friend = require("../models/Friends");
const UserEvent = require("../models/UserEvent");
const Attendance = require("../models/Attendance");

//For Dashboard Page
// const dashboardView = (req, res) => {
//   Friend.find({ownerId:req.user._id},(err,friends)=>{
//     console.log(friends);
//     res.render("dashboard", {
//       user: req.user,
//       friendsList:friends
//     });
//   });
//   };

const dashboardView = async (req, res) => {
  const friends = await Friend.find({ ownerId: req.user._id });
  const events = await UserEvent.find({ ownerId: req.user._id });


  res.render("dashboard", {
    user: req.user,
    friendsList: friends,
    eventsList: events,
  });

};




//For making a new freind in DB
const newFriend = (req, res) => {
  const ownerId = req.user._id;
  const { name } = req.body;

  const newFriend = new Friend({
    ownerId,
    name,
  });

  newFriend
    .save()
    .then(res.redirect("dashboard"))
    .catch((err) => console.log(err));
};


//Update Hours
//Add
const addHour = (req, res) => {
  const { friendId, friendHour } = req.body;
  let newHour = Number(friendHour) + 1;

  Friend
    .findByIdAndUpdate(friendId, { hours: newHour }, err => {
      if (err) {
        console.log(err);
      } else {
        res.redirect("dashboard");
      }

    })
};

//Minus
const minusHour = (req, res) => {
  const { friendId, friendHour } = req.body;
  let newHour = Number(friendHour) - 1;

  Friend
    .findByIdAndUpdate(friendId, { hours: newHour }, err => {
      if (err) {
        console.log(err);
      } else {
        res.redirect("dashboard");
      }

    })
};


//Delete Friend
const deleteFriend = (req, res) => {
  const { friendId } = req.body;

  Friend
    .findByIdAndDelete(friendId, err => {
      if (err) {
        console.log(err);
      } else {
        res.redirect("dashboard");
      }

    })
};


//Create event
//For making a new event in DB
const newEvent = (req, res) => {
  const ownerId = req.user._id;
  const { title, description, date, locationName, locationAddress, locationPostcode } = req.body;

  const newUserEvent = new UserEvent({
    ownerId,
    title,
    description,
    date,
    locationName, 
    locationAddress, 
    locationPostcode, 
  });

  newUserEvent
    .save()
    .then(res.redirect("dashboard"))
    .catch((err) => console.log(err));
};


//Load event
const loadEvent = (req, res) => {
  const id = req.params.id;
  UserEvent.find({ _id: id }, (err, userEvent) => {
    res.render("event", { 
      eventDetails: userEvent 
    });
  });
};


//New attendance
const newAttendance = (req,res) =>{
  const {eventId, name, status} = req.body;

  const newAttendance = new Attendance({
    eventId,
    name,
    status,
  });

  const url_string = "/event/" + eventId;

  newAttendance
    .save()
    .then((res.redirect(url_string)))
    .catch((err) => console.log(err));
};


//Log out
const logOut = (req, res, next) => {
  req.logout(function (err) {
    if (err) { return next(err); }
    res.redirect('/login');
  });
};


module.exports = {
  dashboardView,
  newFriend,
  logOut,
  addHour,
  minusHour,
  deleteFriend,
  newEvent,
  loadEvent,
  newAttendance,
};