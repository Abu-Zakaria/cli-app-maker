const fs = require("fs");
const config = require("../config/app");

module.exports = class WelcomeMessagePrinter {
  constructor() {
    this.data = "";
  }

  read() {
    return new Promise((resolve, reject) => {
      fs.readFile(config.welcome_txt_filename, (err, data) => {
        if (err) reject(err);
        this.data = data.toString();
        console.log(this.data);
        resolve(this.data);
      });
    });
  }

  getData() {
    return this.data;
  }
};
