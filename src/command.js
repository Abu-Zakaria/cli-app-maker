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

  getAction() {
    return this.action;
  }

  getName() {
    return this.name;
  }
}

module.exports = Command;
