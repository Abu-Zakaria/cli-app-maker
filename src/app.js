const app_config = require("./config/app");
const welcome_message_printer = require("./printers/welcome_message_printer");
const CLI = require("./support/cli");

module.exports = class App {
  constructor() {
    this.prefix = app_config.prefix;
    this.cli = new CLI();
    this.running = true;
    this.disable_welcome = false;
  }

  init_welcome() {
    const wm = new welcome_message_printer();

    return new Promise((resolve, reject) => {
      if (this.disable_welcome) {
        resolve();
        return;
      }
      wm.read()
        .then((data) => {
          resolve();
        })
        .catch((err) => {
          reject("An error occured! " + err);
          this.cli.exit();
        });
    });
  }

  start() {
    this.start_loop();
  }

  start_loop() {
    this.render_input()
      .then((res) => {
        if (this.running) this.start_loop();
      })
      .catch((err) => {
        if (err == this.cli.EXIT) this.stop();
      });
  }

  render_input() {
    return this.cli.prompt(this.prefix);
  }

  setPrefix(prefix) {
    this.prefix = app_config.prefix = prefix;
  }

  disableWelcome() {
    this.disable_welcome = true;
  }

  addCommand(command) {
    this.cli.addCommand(command);
  }

  stop() {
    this.running = false;
  }
};
