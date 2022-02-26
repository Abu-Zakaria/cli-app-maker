const expect = require("chai").expect,
  should = require("chai").should();
const { check } = require("./helpers");

const WelcomePrinter = require("../src/printers/welcome_message_printer");
const welcome_printer = new WelcomePrinter();

it("should run welcome printer correctly", function (done) {
  setTimeout(() => {
    welcome_printer.read().catch((err) => {
      check(done, () => {
        expect(err).to.include("not found");
      });
    });
  }, 100);
});
