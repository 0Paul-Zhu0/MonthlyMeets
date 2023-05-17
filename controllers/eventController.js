const UserEvent = require("../models/UserEvent");
const Attendance = require("../models/Attendance");
const ics = require('ics');
const math = require("mathjs");

//Load event
const loadEvent = async (req, res) => {
  const id = req.params.id;
  const user = req.user;

  const userEvent = await UserEvent.find({ _id: id });
  const numAttending = await Attendance.find({ eventId: id, status: "Yes" }).count();

  res.render("event", {
    eventDetails: userEvent,
    numAttending: numAttending,
    user: user,
  });

}



//New attendance
const newAttendance = (req, res) => {
  const { eventId, name, status } = req.body;

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
const downloadCalendar = (req, res) => {
  res.download("public/assets/FebEventCal.ics", function (err) {
    if (err) {
      console.log(err);
    }
  })

}

//download calendar
const downloadCalendarNew = async (req, res) => {
  const id = req.params.id;
  const userEvent = await UserEvent.findOne({ _id: id });

  const day= Number(userEvent.date.toLocaleString('en-us',{day:'numeric'}));
  const month= Number(userEvent.date.toLocaleString('en-us',{month:'numeric'}));
  const year = Number(userEvent.date.toLocaleString('en-us',{year:'numeric'}));
  const hour = Number(userEvent.date.toLocaleString('en-us',{hour:'numeric' , hour12:false}));
  const minute = Number(userEvent.date.toLocaleString('en-us',{minute:'numeric'}));

  const duration = Number(userEvent.duration);

  const durationHour = math.floor(duration);

  if (duration-durationHour == 0){
    var durationMin = 0;
  } else {
    var durationMin = 30;
  }

  
  const eventLocation = userEvent.locationName + "," + userEvent.locationAddress +"," +userEvent.locationPostcode

  const calEvent = {
    start: [year,month,day,hour,minute],
    duration: { hours: durationHour, minutes: durationMin },
    title: userEvent.title,
    description: userEvent.description,
    location: eventLocation,
    url: 'http://13.40.34.71:8080/event/' + id,
    status: 'CONFIRMED',
    busyStatus: 'BUSY',
    organizer: { name: 'Paul', email: 'paul_zhu@live.co.uk' },
  }

ics.createEvent(calEvent,(error,value)=>{
  if (error){
    console.log(error)
    return
  }

  // console.log(value)
  res.set({ "Content-Disposition": "attachment; filename=\"cal.ics\"", 'Content-type': 'text/calendar' });
  res.send(value);
})

}


module.exports = {
  loadEvent,
  newAttendance,
  downloadCalendar,
  downloadCalendarNew,
};