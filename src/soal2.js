const fs = require("fs");
const moment = require("moment");

// Untuk menampilkan waktu
const getCurrentDate = () => {
  return moment().format("MM/DD/YYYY HH:mm:ss");
};

// Data sample
const logData = "Rumus telah berhasil dijalankan.";

// Tulis log ke dalam file log.txt
fs.writeFile("log.txt", `${getCurrentDate()} ${logData}\n`, { flag: "a+" }, (err) => {
  if (err) throw err;
  console.log("Log telah ditulis ke dalam file log.txt");
});
