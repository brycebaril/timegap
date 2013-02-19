timegap
=======

A simple library for creating short, approximate formatted strings for human consumption.

E.g. "1s" "45m" "2h" "3d" "2m3s" "2d9h" "-5y22d4h3m10s223ms"

```javascript
var timegap = require("timegap");

var formatted = timegap.diff(new Date("2013-02-18T15:58:00.000Z"), Date.now(), 3);
var seconds = timegap.seconds(new Date("2010-02-01T00:00:00"), Date.now());
```

install
=======

with [npm](http://npmjs.org), do:

    npm install timegap

Long(er) Diff Format
====================
Computes a diff between `start` and `end`, formatting it into `parts` parts (e.g. 2d4h is "2" parts). If end is before start, the difference will be negative.

.diff_to_ms(start, end[, parts])
----------------------------------

Compute the diff down to the millisecond level at minimum.

.diff_to_s(start, end[, parts]) / .diff(start, end[, parts])
----------------------------------------------------------------

Compute the diff down to the second level at minimum. `.diff_to_s` and `.diff` are aliases.

.diff_to_m(start, end[, parts])
---------------------------------

Compute the diff down to the minute level at minimum.

.diff_to_h(start, end[, parts])
---------------------------------

Compute the diff down to the hour level at minimum.

.diff_to_d(start, end[, parts])
---------------------------------

Compute the diff down to the day level at minimum.

.diff_to_y(start, end[, parts]) / years(start, end)
---------------------------------

Compute the diff down to the year level at minimum. `.diff_to_y` and `.years` are equivalent.


```javascript
timegap.diff(start, end);
// e.g. "3s"

timegap.diff(start, end, 2);
// e.g. "-5m2s"

timegap.diff_to_d(start, end, 2);
// e.g. "3y1d"
```

Short Diff Format
=================
Computes a diff between `start` and `end` at the unit specified.

.millis(start, end)
-------------------

Calculate the number of milliseconds between the two dates.

.seconds(start, end)
--------------------

Calculate the number of seconds between the two dates.

.minutes(start, end)
--------------------

Calculate the number of minutes between the two dates.

.hours(start, end)
------------------

Calculate the number of hours between the two dates.

.days(start, end)
-----------------

Calculate the number of days between the two dates.

.years(start, end)
------------------

Calculate the number of years between the two dates.

```javascript
timegap.seconds(start, end);
// e.g. "3s"

timegap.minutes(start, end, 2);
// e.g. "-5m"

timegap.millseconds(start, end, 2);
// e.g. "11245231ms"
```

License
=======

(The MIT License)

Copyright (c) Bryce B. Baril <bryce@ravenwall.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
