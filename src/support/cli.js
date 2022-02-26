const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
const app_config = require("../config/app");

module.exports = class CLI {
  constructor() {
    this.readline = readline;

    this.EXIT = 1;
  }

  prompt(prefix = "") {
    return new Promise((resolve, reject) => {
      this.readline.question(prefix, (input) => {
        if (this.ifExit(input)) {
          this.exit();
          reject(this.EXIT);
        }

        this.readline.close();
        resolve();
      });
    });
  }

  ifExit(input) {
    return app_config.exit_command === input;
  }

  exit() {
    console.log(app_config.exit_text);
    this.readline.close();
  }
};
