describe("FormatMeetingDayTime", function() {
  var FormatMeetingDayTime = require('../../lib/lions/FormatMeetingDayTime');

  [
    ["MO,3,6:00PM", "Every 3rd Monday at 18:00"],
    ["TU,1,2,3,4,5,12:00PM", "Every 1st, 2nd, 3rd, 4th, 5th Tuesday at 12:00"],
    ["WE,2,4,7:00PM", "Every 2nd, 4th Wednesday at 19:00"],
    ["TU,2,4,6:30PM", "Every 2nd, 4th Tuesday at 18:30"],
    ["SA,2,", "Every 2nd Saturday at"],
    ["TH,2,6:30PM", "Every 2nd Thursday at 18:30"],
    ["TU,2,12:00PM", "Every 2nd Tuesday at 12:00"],
    ["TH,2,4,2:00PM", "Every 2nd, 4th Thursday at 14:00"],
    ["TU,1,3,6:30PM", "Every 1st, 3rd Tuesday at 18:30"],
    ["SA,1,3,11:00AM", "Every 1st, 3rd Saturday at 11:00"]
  ].forEach(function(key) {
    it("should return " + key[1], function() {
      expect(FormatMeetingDayTime(key[0])).toBe(key[1]);
    });
  });
});
