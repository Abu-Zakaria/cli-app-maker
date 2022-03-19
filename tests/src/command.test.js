const expect = require("chai").expect,
  should = require("chai").should();
const { check } = require("../helpers");
const Arg = require("../../src/arg");
const Command = require("../../src/command");

describe("testing command class and it's functionalities", () => {
  it("sets arguments(Arg) in a command(Command)", () => {
    const command = new Command();
    const arg = new Arg("--asd=qwe");

    command.addArg(arg);

    const added_arg = command.getArg("asd");

    expect(added_arg.bits.val).to.equals("qwe");
  });
});
