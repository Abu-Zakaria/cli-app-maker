const app_config = require("./config/app");
const welcome_message_printer = require("./printers/welcome_message_printer");
const CLI = require("./support/cli");

module.exports = class App {
  constructor() {
    this.prefix = app_config.prefix;
  }

  init_welcome() {
    const wm = new welcome_message_printer();

    return new Promise((resolve, reject) => {
      wm.read()
        .then((data) => {
          resolve();
        })
        .catch((err) => {
          throw "Something went wrong. " + err;
        });
    });
  }

  render_input() {
    const cli = new CLI();
    cli.prompt(this.prefix);
  }

  setPrefix(prefix) {
    this.prefix = app_config.prefix = prefix;
  }
};
