const app_config = require("./config/app");
const welcome_message_printer = require("./printers/welcome_message_printer");
const CLI = require("./support/cli");

module.exports = class App {
  constructor() {
    this.prefix = app_config.prefix;
    this.cli = new CLI();
    this.running = true;
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

  start() {
    const vm = this;
    this.render_input()
      .then((res) => {
        if (this.running) this.render_input();
      })
      .catch((err) => {
        if (this.cli.EXIT) this.running = false;
      });
  }

  render_input() {
    return this.cli.prompt(this.prefix);
  }

  setPrefix(prefix) {
    this.prefix = app_config.prefix = prefix;
  }
};
