const readline = require("readline").createInterface({
  input : process.stdin,
  output : process.stdout,
});
const app_config = require("../config/app");
const Arg = require("../arg.js");

module.exports = class CLI {
  constructor() {
    this.readline = readline;
    this.commands = {};

    this.EXIT = 1;
  }

  prompt(prefix = "") {
    return new Promise((resolve, reject) => {
      this.readline.question(prefix, (input) => {
        const bits = input.split(" ");
        if (bits.length < 1) {
          resolve();
          return;
        }
        const command = bits.shift();
        const args = bits.map((bit) => { return new Arg(bit); });

        if (this.commands[command]) {
          const fn = this.commands[command];
          fn(args);
        } else if (this.ifExit(input)) {
          this.exit();
          reject(this.EXIT);
        }

        resolve();
      });
    });
  }

  ifExit(input) { return app_config.exit_command === input; }

  exit() {
    console.log(app_config.exit_text);
    this.readline.close();
  }

  addCommand(command) {
    this.commands[command.getName()] = command.getAction();
  }
};
