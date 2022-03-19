class Arg {
  constructor(input) {
    this.bits = this.getBits(input);
    this.action = null;
  }

  getBits(input) {
    if (input.substr(0, 2) == "--") {
      return this.bitsByDash(input);
    } else if (input.substr(0, 1) == "-") {
      return this.bitsByDash(input, 1);
    } else if (input.substr(0, 1) != "-") {
      return {
        key: null,
        val: input,
      };
    }
  }

  bitsByDash(argument, dashes_count = 2, value_separator = "=") {
    const bits = argument.substr(dashes_count, argument.length - 1).split(value_separator);

    return {
      key: bits[0],
      val: bits.length > 1 ? bits[1] : null,
    };
  }

  getKey() {
    return this.bits ? this.bits.key : null;
  }

  getValue() {
    return this.bits ? this.bits.val : null;
  }

  setAction(action) {
    this.action = action;
  }

  runAction() {
    return this.action(this.bits.key, this.bits.val);
  }
}

module.exports = Arg;
