(function () {
  var SECOND = 1000;
  var MINUTE = SECOND * 60;
  var HOUR = MINUTE * 60;
  var DAY = HOUR * 24;
  var YEAR = DAY * 365;

  function _diff(start, end) {
    if (start instanceof Date) start = start.getTime();
    if (end instanceof Date) end = end.getTime();

    var ms = end - start;
    var s = 0;
    var m = 0;
    var h = 0;
    var d = 0;
    var y = 0;

    var order = (ms < 0) ? -1 : 1;
    ms = Math.abs(ms);

    y = ((ms / YEAR) | 0);
    ms -= (y * YEAR);
    d = ((ms / DAY) | 0);
    ms -= (d * DAY);
    h = ((ms / HOUR) | 0);
    ms -= (h * HOUR);
    m = ((ms / MINUTE) | 0);
    ms -= (m * MINUTE);
    s = ((ms / SECOND) | 0);
    ms -= (s * SECOND);

    return [order, y, d, h, m, s, ms];
  }

  function _multiFormat(start, end, max, bits) {
    var max = max || 1;
    var d = _diff(start, end);
    var o = d.shift();
    var out = "";
    var added = 0;
    bits.forEach(function (unit) {
      if (added >= max) return;
      var next = d.shift();
      if (next == 0) return;
      if (added == 0) next *= o;
      out += (next + unit);
      added++;
    });
    if (out.length > 0) return out;
    return "0" + bits.pop();
  }

  function diff_to_ms(start, end, max) {
    return _multiFormat(start, end, max, ["y", "d", "h", "m", "s", "ms"]);
  }

  function diff_to_s(start, end, max) {
    return _multiFormat(start, end, max, ["y", "d", "h", "m", "s"]);
  }
  function diff_to_m(start, end, max) {
    return _multiFormat(start, end, max, ["y", "d", "h", "m"]);
  }

  function diff_to_h(start, end, max) {
    return _multiFormat(start, end, max, ["y", "d", "h"]);
  }

  function diff_to_d(start, end, max) {
    return _multiFormat(start, end, max, ["y", "d"]);
  }

  function millis(start, end) {
    if (start instanceof Date) start = start.getTime();
    if (end instanceof Date) end = end.getTime();
    return (end - start) + "ms";
  }

  function seconds(start, end) {
    var d = _diff(start, end);
    console.log(d);
    var o = d.shift();
    var seconds = (365 * 24 * 60 * 60) * d[0] + (24 * 60 * 60) * d[1] + (60 * 60) * d[2] + 60 * d[3] + d[4];
    return o * seconds + "s";
  }

  function minutes(start, end) {
    var d = _diff(start, end);
    var o = d.shift();
    var minutes = (365 * 24 * 60) * d[0] + (24 * 60) * d[1] + 60 * d[2] + d[3];
    return o * minutes + "m";
  }

  function hours(start, end) {
    var d = _diff(start, end);
    var o = d.shift();
    var hours = (365 * 24) * d[0] + 24 * d[1] + d[2];
    return o * hours + "h";
  }

  function days(start, end) {
    var d = _diff(start, end);
    var o = d.shift();
    var days = 365 * d[0] + d[1];
    return o * days + "d";
  }

  function years(start, end) {
    var d = _diff(start, end);
    var o = d.shift();
    return o * d[0] + "y";
  }

  if (typeof module !== "undefined" && typeof require !== "undefined") {
    exports.diff_to_ms = diff_to_ms;
    exports.diff_to_s = diff_to_s;
    exports.diff = diff_to_s;
    exports.diff_to_m = diff_to_m;
    exports.diff_to_h = diff_to_h;
    exports.diff_to_d = diff_to_d;
    exports.millis = millis;
    exports.seconds = seconds;
    exports.minutes = minutes;
    exports.hours = hours;
    exports.days = days;
    exports.years = years;
    exports.diff_to_y = years;
  }
  else {
    window["diff_to_ms"] = diff_to_ms;
    window["diff_to_s"] = diff_to_s;
    window["diff"] = diff_to_s;
    window["diff_to_m"] = diff_to_m;
    window["diff_to_h"] = diff_to_h;
    window["diff_to_d"] = diff_to_d;
    window["millis"] = millis;
    window["seconds"] = seconds;
    window["minutes"] = minutes;
    window["hours"] = hours;
    window["days"] = days;
    window["years"] = years;
    window["diff_to_y"] = years;
  }
})();
