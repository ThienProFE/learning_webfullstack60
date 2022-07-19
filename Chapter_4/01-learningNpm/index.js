const jsonExport = require("jsonexport");
const contacts = {
  name: "Nguyen Van Thien",
  age: 28,
  courseName: "Web Full Stack",
};

jsonExport(contacts, function (err, csvContact) {
  if (err) return console.error(err);
  console.log(csvContact);
});
