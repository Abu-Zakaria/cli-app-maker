class Command {
  constructor() {
    this.name = null;
    this.args = [];
    this.action = null;
  }

  setName(name) {
    this.name = name;
  }

  setAction(fn) {
    this.action = fn;
  }
}

module.exports = Command;
