const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

module.exports = class CLI {
  constructor() {
    this.readline = readline;
  }

  prompt(prefix = "") {
    this.readline.question(prefix, (input) => {
      console.log(`you wrote "${input}"`);
      this.readline.close();
    });
  }
};
