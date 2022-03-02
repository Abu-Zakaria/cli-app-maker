class Arg {
    constructor(input){
        this.bits = this.getBits(input);
    }

    getBits(input) {
        if(input.substr(0, 2) == "--")
        {
            return this.bitsByDoubleDash(input);
        }
    }

    bitsByDoubleDash(argument) {
        const bits = argument.substr(2, argument.length - 1).split("=")

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
}

module.exports = Arg;
