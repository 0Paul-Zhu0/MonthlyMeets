const mongoose = require("mongoose");
const UserEventSchema = new mongoose.Schema({
    ownerId:{
        type: String,
        required: true,
      },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
        default: "",
    },
    date: {
        type: Date,
        required: true,
    },
    locationName: {
        type: String,
        required: true,
    },
    locationAddress: {
        type: String,
        required: true,
    },
    locationPostcode: {
        type: String,
        required: true,
    },
    eventLive:{
        type: Boolean,
        required: true,
    }
});

const UserEvent = mongoose.model("UserEvent", UserEventSchema);
module.exports = UserEvent;