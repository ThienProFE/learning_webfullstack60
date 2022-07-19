var { fromIsoToHuman, fromHumanToIso } = require("@sineverba/date-convert");

var date1 = fromIsoToHuman("19940110");
console.log(date1); // returns 10/01/1994

var date2 = fromIsoToHuman("19940110", "AAAA-MM-DD");
console.log(date2); // returns 2020-01-02
// var isoDate = fromHumanToIso("02/01/2020");
// console.log(isoDate); // returns 20200102
