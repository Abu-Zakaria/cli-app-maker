const expect = require("chai").expect,
  should = require("chai").should();
const { check } = require("../helpers");
const Arg = require("../../src/arg");

describe("arg class testing", function () {
  it("splits argument when using -- and =", () => {
    const input = "--asd=qwe";

    const arg = new Arg(input);

    const key = arg.getKey();
    const val = arg.getValue();

    expect(key).to.equals("asd");
    expect(val).to.equals("qwe");
  });

  it("splits argument and return key(string) and value(null) when value haven't given", () => {
    const input = "--qwe";

    const arg = new Arg(input);

    const key = arg.getKey();
    const value = arg.getValue();

    expect(key).to.equals("qwe");
    expect(value).to.equals(null);
  });

  it("splits argument while using - and =", function () {
    const arg = new Arg("-f=ASD");

    const key = arg.getKey();
    const val = arg.getValue();

    expect(key).to.equals("f");
    expect(val).to.equals("ASD");
  });

  it("works without using any dash prefix argument", function () {
    const arg = new Arg("hello");

    const key = arg.getKey();
    const val = arg.getValue();

    expect(key).to.equals(null);
    expect(val).to.equals("hello");
  });

  it("can attach a function to an arg", function () {
    const arg = new Arg("--asd=qwe");

    arg.setAction((key, value) => {
      return "works";
    });

    const res = arg.runAction();

    expect(res).to.equals("works");
  });
});
