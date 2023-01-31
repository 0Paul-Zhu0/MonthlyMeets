function reveal1() {
    var x = document.getElementById("landingQuestion");

    var y = document.getElementById("upcomingEventsBtn");

    x.style.display = "block";
    y.style.display = "none";
}

function reveal2a() {

    var x = document.getElementById("landingAnswerA");
    var y = document.getElementById("landingEventsList");

    var s = document.getElementById("landingAnswerB");
    var t = document.getElementById("landingAnswerC");

    var b = document.getElementById("invitedResponseB");
    var c = document.getElementById("invitedResponseC");

    if (s.style.display == "block" || t.style.display == "block") {

    } else {
        x.style.display = "block";
        y.style.display = "block";
    }

    b.style.display = "none";
    c.style.display = "none";

}

function reveal2b() {
    var x = document.getElementById("landingAnswerB");
    var y = document.getElementById("landingEventsList");

    var s = document.getElementById("landingAnswerA");
    var t = document.getElementById("landingAnswerC");

    var a = document.getElementById("invitedResponseA");
    var c = document.getElementById("invitedResponseC");

    if (s.style.display == "block" || t.style.display == "block") {

    } else {

        x.style.display = "block";
        y.style.display = "block";
    }
    a.style.display = "none";
    c.style.display = "none";
}

function reveal2c() {
    var x = document.getElementById("landingAnswerC");
    var y = document.getElementById("landingEventsList");

    var s = document.getElementById("landingAnswerA");
    var t = document.getElementById("landingAnswerB");

    var b = document.getElementById("invitedResponseB");
    var a = document.getElementById("invitedResponseC");

    if (s.style.display == "block" || t.style.display == "block") {

    } else {
        x.style.display = "block";
        y.style.display = "block";

    }

    a.style.display = "none";
    b.style.display = "none";

}


function hideShow() {
    var x = document.getElementById("eventDesc");
    var y = document.getElementById("butWhy");
    var z = document.getElementById("eventDescBtn");
    var a = document.getElementById("butWhyBtn");

    if (x.style.display === "none") {
        x.style.display = "block";
        z.style.display = "block";

        y.style.display = "none";
        a.style.display = "none";
    } else {
        x.style.display = "none";
        z.style.display = "none";

        y.style.display = "block";
        a.style.display = "block";
    }

}

function validateAttForm() {
    //TEST validation
    var x = document.getElementById("formName");

    var y = document.getElementById("formStatus");

    var emptyName = document.forms['attForm']['name'].value;
    var emptyStatus = document.forms['attForm']['status'].value;

    submitCondition = true;

    if (emptyName == '' && emptyStatus == '') {
        x.placeholder = "what's ya name betch?";
        x.style.border = "2px solid red";
        y.style.border = "2px solid red";
        submitCondition = false;
    } else if (emptyName == '') {
        x.placeholder = "what's ya name betch?";
        x.style.border = "2px solid red";
        y.style.border = "1px solid #767676";

        submitCondition = false;
    } else if (emptyStatus == '') {
        y.style.border = "2px solid red";
        x.style.border = "1px solid #767676";
        submitCondition = false;
    }


    if (submitCondition == false) {
        return false;
    } else {
        return true;
    }


}