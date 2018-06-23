/*
Creatinng / Comparing date objects without time
*/

var date1 = new Date(),
    date2 = new Date(2011,8,20),
    date1.setHours(0,0,0,0);

Date.prototype.withoutTime = function () {
    var d = new Date(this);
    d.setHours(0, 0, 0, 0);
    return d;
};

var date1 = new Date(2014,1,1);
new Date().withoutTime() > date1.withoutTime(); // true


// Reference: https://stackoverflow.com/questions/2698725/comparing-date-part-only-without-comparing-time-in-javascript
