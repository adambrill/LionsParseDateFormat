<?php
function FormatMeetingDayTime($meetingDate) {
	$parts = explode(',', $meetingDate);
	$meetingTime = $parts[count($parts) - 1];
	$meetingTime = str_replace('NOON', 'PM', $meetingTime);
	if ($meetingTime) {
		$tempDate = date_parse("2000-01-01 " . str_replace("PM", " PM", str_replace("AM", " AM", $meetingTime)));
		if ($tempDate) {
			$meetingTime = substr('0' . $tempDate['hour'], -2) . ":" . substr('0' . $tempDate['minute'], -2);
		}
	}
	$weekDay = function ($day) {
		if ($day == "MO") {
			return "Monday";
		} else if ($day == "TU") {
			return "Tuesday";
		} else if ($day == "WE") {
			return "Wednesday";
		} else if ($day == "TH") {
			return "Thursday";
		} else if ($day == "FR") {
			return "Friday";
		} else if ($day == "SA") {
			return "Saturday";
		} else if ($day == "SU") {
			return "Sunday";
		}
	};
	$weekDay = $weekDay($parts[0]);
	$mapFunc = function($val) {
		if ($val == "1") {
			return "1st";
		} else if ($val == "2") {
			return "2nd";
		} else if ($val == "3") {
			return "3rd";
		} else if ($val == "4") {
			return "4th";
		} else if ($val == "5") {
			return "5th";
		}
	};
	$meetingDays = join(", ", array_map($mapFunc, array_slice($parts, 1, count($parts)-2)));

	return "Every " . $meetingDays . " " . $weekDay . " at" . (($meetingTime) ? " " . $meetingTime : "");
};
