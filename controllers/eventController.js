const UserEvent = require("../models/UserEvent");
const Attendance = require("../models/Attendance");

//Load event
const loadEvent = async (req, res) => {
    const id = req.params.id;
    const user = req.user;
  
    const userEvent = await UserEvent.find({ _id: id });
    const numAttending = await Attendance.find({eventId:id,status:"Yes"}).count();
  
    res.render("event",{
      eventDetails: userEvent,
      numAttending: numAttending, 
      user: user,
    });
  
  }


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

//download calendar
const downloadCalendar = (req,res) => {
    res.download("public/assets/home.png", function(err){
        if(err){
            console.log(err);
        }
    })

}


module.exports = {
    loadEvent,
    newAttendance,
    downloadCalendar,
};