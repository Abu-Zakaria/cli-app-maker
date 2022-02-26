const expect = require("chai").expect,
  should = require("chai").should();
const { check } = require("./../helpers");
const fs = require("fs");

const WelcomePrinter = require("../../src/printers/welcome_message_printer");
const welcome_printer = new WelcomePrinter();

it("should show error message when reading without any welcome text file", function (done) {
  setTimeout(() => {
    welcome_printer.read().catch((err) => {
      check(done, () => {
        expect(err).to.include("not found");
      });
    });
  }, 100);
});

it("should show welcome message", function (done) {
  fs.writeFileSync("./welcome.txt", "Welcome to cli app maker");
  setTimeout(() => {
    welcome_printer.read().then((data) => {
      check(done, () => {
        expect(data).to.include("Welcome to cli app maker");

        fs.unlink("./welcome.txt", () => {});
      });
    });
  });
});
