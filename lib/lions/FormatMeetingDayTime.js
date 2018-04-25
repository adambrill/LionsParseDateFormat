function FormatMeetingDayTime(meetingDate) {
	var MeetingInfo = meetingDate.split(',');

	var meetingTime = MeetingInfo[MeetingInfo.length-1];
	meetingTime = meetingTime.replace('NOON', 'PM');

	if (meetingTime) {
		var tempDate = new Date("01/01/2000 " + meetingTime.replace("AM", " AM").replace("PM", " PM"));
		if (tempDate) {
			meetingTime = ('0'+tempDate.getHours()).slice(-2) + ":" + ('0'+tempDate.getMinutes()).slice(-2);
		}
	}

	var weekDayTrans = weekDay = function(day) {
		if (day == "MO") {
			return "Monday";
		} else if (day == "TU") {
			return "Tuesday";
		} else if (day == "WE") {
			return "Wednesday";
		} else if (day == "TH") {
			return "Thursday";
		} else if (day == "FR") {
			return "Friday";
		} else if (day == "SA") {
			return "Saturday";
		} else if (day == "SU") {
			return "Sunday";
		}
	}(MeetingInfo[0]);

	var meetingDays = MeetingInfo.slice(1, MeetingInfo.length-1).map(function(val) {
		if (val == "1") {
			return "1st";
		} else if (val == "2") {
			return "2nd";
		} else if (val == "3") {
			return "3rd";
		} else if (val == "4") {
			return "4th";
		} else if (val == "5") {
			return "5th";
		}
	}).join(", ");

	return "Every " + meetingDays + " " + weekDay + " at" + ((meetingTime) ? " " + meetingTime : "");
}

module.exports = FormatMeetingDayTime;
