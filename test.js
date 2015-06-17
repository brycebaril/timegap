var timegap = require("./index");
var test = require("tape");

var dates = [
  new Date("2013-02-18T16:41:22.333Z"),
  new Date("2013-02-18T16:41:21.633Z"),
  new Date("2013-02-18T16:41:11.003Z"),
  new Date("2013-02-18T16:38:19.203Z"),
  new Date("2013-02-18T12:38:22.333Z"),
  new Date("2013-02-18T12:22:18.303Z"),
  new Date("2013-02-17T22:21:22.303Z"),
  new Date("2013-01-02T09:09:02.000Z"),
  new Date("2010-06-24T20:18:49.821Z"),
  new Date("2010-02-18T16:41:22.333Z"),
  new Date("2001-12-23T09:01:01.010Z"),
];

test("millis", function (t) {
  t.equal(timegap.millis(dates[0], dates[0]), "0ms");
  t.equal(timegap.millis(dates[1], dates[0]), "700ms");
  t.equal(timegap.millis(dates[0], dates[1]), "-700ms");
  t.equal(timegap.millis(dates[2], dates[0]), "11330ms");
  t.equal(timegap.millis(dates[3], dates[0]), "183130ms");
  t.equal(timegap.millis(dates[4], dates[0]), "14580000ms");
  t.equal(timegap.millis(dates[5], dates[0]), "15544030ms");
  t.equal(timegap.millis(dates[6], dates[0]), "66000030ms");
  t.equal(timegap.millis(dates[7], dates[0]), "4087940333ms");
  t.equal(timegap.millis(dates[8], dates[0]), "83794952512ms");
  t.equal(timegap.millis(dates[9], dates[0]), "94694400000ms");
  t.equal(timegap.millis(dates[10], dates[0]), "352107621323ms");
  t.end();
});

test("seconds", function (t) {
  t.equal(timegap.seconds(dates[0], dates[0]), "0s");
  t.equal(timegap.seconds(dates[1], dates[0]), "0s");
  t.equal(timegap.seconds(dates[2], dates[0]), "11s");
  t.equal(timegap.seconds(dates[3], dates[0]), "183s");
  t.equal(timegap.seconds(dates[0], dates[3]), "-183s");
  t.equal(timegap.seconds(dates[4], dates[0]), "14580s");
  t.equal(timegap.seconds(dates[5], dates[0]), "15544s");
  t.equal(timegap.seconds(dates[6], dates[0]), "66000s");
  t.equal(timegap.seconds(dates[7], dates[0]), "4087940s");
  t.equal(timegap.seconds(dates[8], dates[0]), "83794952s");
  t.equal(timegap.seconds(dates[9], dates[0]), "94694400s");
  t.equal(timegap.seconds(dates[10], dates[0]), "352107621s");
  t.end();
});

test("minutes", function (t) {
  t.equal(timegap.minutes(dates[0], dates[0]), "0m");
  t.equal(timegap.minutes(dates[1], dates[0]), "0m");
  t.equal(timegap.minutes(dates[2], dates[0]), "0m");
  t.equal(timegap.minutes(dates[3], dates[0]), "3m");
  t.equal(timegap.minutes(dates[4], dates[0]), "243m");
  t.equal(timegap.minutes(dates[5], dates[0]), "259m");
  t.equal(timegap.minutes(dates[0], dates[5]), "-259m");
  t.equal(timegap.minutes(dates[6], dates[0]), "1100m");
  t.equal(timegap.minutes(dates[7], dates[0]), "68132m");
  t.equal(timegap.minutes(dates[8], dates[0]), "1396582m");
  t.equal(timegap.minutes(dates[9], dates[0]), "1578240m");
  t.equal(timegap.minutes(dates[10], dates[0]), "5868460m");
  t.end();
});

test("hours", function (t) {
  t.equal(timegap.hours(dates[0], dates[0]), "0h");
  t.equal(timegap.hours(dates[1], dates[0]), "0h");
  t.equal(timegap.hours(dates[2], dates[0]), "0h");
  t.equal(timegap.hours(dates[3], dates[0]), "0h");
  t.equal(timegap.hours(dates[4], dates[0]), "4h");
  t.equal(timegap.hours(dates[5], dates[0]), "4h");
  t.equal(timegap.hours(dates[6], dates[0]), "18h");
  t.equal(timegap.hours(dates[0], dates[6]), "-18h");
  t.equal(timegap.hours(dates[7], dates[0]), "1135h");
  t.equal(timegap.hours(dates[8], dates[0]), "23276h");
  t.equal(timegap.hours(dates[9], dates[0]), "26304h");
  t.equal(timegap.hours(dates[10], dates[0]), "97807h");
  t.end();
});

test("days", function (t) {
  t.equal(timegap.days(dates[0], dates[0]), "0d");
  t.equal(timegap.days(dates[1], dates[0]), "0d");
  t.equal(timegap.days(dates[2], dates[0]), "0d");
  t.equal(timegap.days(dates[3], dates[0]), "0d");
  t.equal(timegap.days(dates[4], dates[0]), "0d");
  t.equal(timegap.days(dates[5], dates[0]), "0d");
  t.equal(timegap.days(dates[6], dates[0]), "0d");
  t.equal(timegap.days(dates[7], dates[0]), "47d");
  t.equal(timegap.days(dates[8], dates[0]), "969d");
  t.equal(timegap.days(dates[8], dates[0].getTime()), "969d");
  t.equal(timegap.days(dates[9], dates[0]), "1096d");
  t.equal(timegap.days(dates[0], dates[9]), "-1096d");
  t.equal(timegap.days(dates[10], dates[0]), "4075d");
  t.end();
});

test("years", function (t) {
  t.equal(timegap.years(dates[0], dates[0]), "0y");
  t.equal(timegap.years(dates[1], dates[0]), "0y");
  t.equal(timegap.years(dates[2], dates[0]), "0y");
  t.equal(timegap.years(dates[3], dates[0]), "0y");
  t.equal(timegap.years(dates[4], dates[0]), "0y");
  t.equal(timegap.years(dates[5], dates[0]), "0y");
  t.equal(timegap.years(dates[6], dates[0]), "0y");
  t.equal(timegap.years(dates[7], dates[0]), "0y");
  t.equal(timegap.years(dates[8], dates[0]), "2y");
  t.equal(timegap.years(dates[9], dates[0]), "3y");
  t.equal(timegap.years(dates[0], dates[10]), "-11y");
  t.equal(timegap.years(dates[10], dates[0]), "11y");
  t.end();
});

test("diff_to_ms", function (t) {
  t.equal(timegap.diff_to_ms(dates[10], dates[0], 0), "11y");
  t.equal(timegap.diff_to_ms(dates[10], dates[0], 1), "11y");
  t.equal(timegap.diff_to_ms(dates[0], dates[10], 1), "-11y");
  t.equal(timegap.diff_to_ms(dates[10], dates[0], 2), "11y60d");
  t.equal(timegap.diff_to_ms(dates[10], dates[0], 3), "11y60d7h");
  t.equal(timegap.diff_to_ms(dates[10], dates[0], 4), "11y60d7h40m");
  t.equal(timegap.diff_to_ms(dates[10], dates[0], 5), "11y60d7h40m21s");
  t.equal(timegap.diff_to_ms(dates[10], dates[0], 6), "11y60d7h40m21s323ms");
  t.equal(timegap.diff_to_ms(dates[3], dates[0], 6), "3m3s130ms");
  t.equal(timegap.diff_to_ms(dates[7], dates[0], 6), "47d7h32m20s333ms");
  t.end();
});

test("diff_to_s", function (t) {
  t.equal(timegap.diff_to_s(dates[10], dates[0], 0), "11y");
  t.equal(timegap.diff_to_s(dates[10], dates[0], 1), "11y");
  t.equal(timegap.diff_to_s(dates[0], dates[10], 1), "-11y");
  t.equal(timegap.diff_to_s(dates[10], dates[0], 2), "11y60d");
  t.equal(timegap.diff_to_s(dates[10], dates[0], 3), "11y60d7h");
  t.equal(timegap.diff_to_s(dates[10], dates[0], 4), "11y60d7h40m");
  t.equal(timegap.diff_to_s(dates[10], dates[0], 5), "11y60d7h40m21s");
  t.equal(timegap.diff_to_s(dates[10], dates[0], 6), "11y60d7h40m21s");
  t.equal(timegap.diff_to_s(dates[3], dates[0], 6), "3m3s");
  t.equal(timegap.diff_to_s(dates[7], dates[0], 6), "47d7h32m20s");
  t.end();
});

test("diff", function (t) {
  t.equal(timegap.diff(dates[10], dates[0], 0), "11y");
  t.equal(timegap.diff(dates[10], dates[0], 1), "11y");
  t.equal(timegap.diff(dates[0], dates[10], 1), "-11y");
  t.equal(timegap.diff(dates[10], dates[0], 2), "11y60d");
  t.equal(timegap.diff(dates[10], dates[0], 3), "11y60d7h");
  t.equal(timegap.diff(dates[10], dates[0], 4), "11y60d7h40m");
  t.equal(timegap.diff(dates[10], dates[0], 5), "11y60d7h40m21s");
  t.equal(timegap.diff(dates[10], dates[0], 6), "11y60d7h40m21s");
  t.equal(timegap.diff(dates[3], dates[0], 6), "3m3s");
  t.equal(timegap.diff(dates[7], dates[0], 6), "47d7h32m20s");
  t.end();
});

test("diff_to_m", function (t) {
  t.equal(timegap.diff_to_m(dates[10], dates[0], 0), "11y");
  t.equal(timegap.diff_to_m(dates[10], dates[0], 1), "11y");
  t.equal(timegap.diff_to_m(dates[0], dates[10], 1), "-11y");
  t.equal(timegap.diff_to_m(dates[10], dates[0], 2), "11y60d");
  t.equal(timegap.diff_to_m(dates[10], dates[0], 3), "11y60d7h");
  t.equal(timegap.diff_to_m(dates[10], dates[0], 4), "11y60d7h40m");
  t.equal(timegap.diff_to_m(dates[3], dates[0], 6), "3m");
  t.equal(timegap.diff_to_m(dates[0], dates[7], 6), "-47d7h32m");
  t.end();
});

test("diff_to_h", function (t) {
  t.equal(timegap.diff_to_h(dates[10], dates[0], 0), "11y");
  t.equal(timegap.diff_to_h(dates[10], dates[0], 1), "11y");
  t.equal(timegap.diff_to_h(dates[0], dates[10], 1), "-11y");
  t.equal(timegap.diff_to_h(dates[10], dates[0], 2), "11y60d");
  t.equal(timegap.diff_to_h(dates[10], dates[0], 3), "11y60d7h");
  t.equal(timegap.diff_to_h(dates[10], dates[0], 4), "11y60d7h");
  t.equal(timegap.diff_to_h(dates[3], dates[0], 6), "0h");
  t.equal(timegap.diff_to_h(dates[7], dates[0], 6), "47d7h");
  t.end();
});

test("diff_to_d", function (t) {
  t.equal(timegap.diff_to_d(dates[10], dates[0], 0), "11y");
  t.equal(timegap.diff_to_d(dates[10], dates[0], 1), "11y");
  t.equal(timegap.diff_to_d(dates[0], dates[10], 1), "-11y");
  t.equal(timegap.diff_to_d(dates[10], dates[0], 2), "11y60d");
  t.equal(timegap.diff_to_d(dates[10], dates[0], 3), "11y60d");
  t.equal(timegap.diff_to_d(dates[3], dates[0], 6), "0d");
  t.equal(timegap.diff_to_d(dates[7], dates[0], 6), "47d");
  t.end();
});

test("diff_to_y", function (t) {
  t.equal(timegap.diff_to_y(dates[10], dates[0], 0), "11y");
  t.equal(timegap.diff_to_y(dates[10], dates[0], 1), "11y");
  t.equal(timegap.diff_to_y(dates[0], dates[10], 1), "-11y");
  t.equal(timegap.diff_to_y(dates[10], dates[0], 2), "11y");
  t.equal(timegap.diff_to_y(dates[3], dates[0], 6), "0y");
  t.equal(timegap.diff_to_y(dates[7], dates[0], 6), "0y");
  t.end();
});
