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

  addArg(arg) {
    this.args[arg.bits.key] = arg;
  }

  getArg(key) {
    return this.args[key];
  }
}

module.exports = Command;
