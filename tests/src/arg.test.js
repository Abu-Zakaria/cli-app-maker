const expect = require("chai").expect,
  should = require("chai").should();
const { check } = require("../helpers");
const Arg = require('../../src/arg')

describe("arg class testing", function() {
    it('splits argument when using -- and =', () => {
        const input = "--asd=qwe";

        const arg = new Arg(input);

        const key = arg.getKey();
        const val = arg.getValue();

        expect(key).to.equals("asd")
        expect(val).to.equals("qwe")
    })
})
