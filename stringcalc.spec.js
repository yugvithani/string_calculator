const { add } = require('./stringcalc.js');

describe("String Calculator Tests", () => {
    test("Empty String",() => {
        expect(add("")).toBe(0);
    })
});