const { add } = require('./stringcalc.js');

describe("String Calculator Tests", () => {
    test("Empty String",() => {
        expect(add("")).toBe(0)
    }),
    test("Single Number", () => {
        expect(add("1")).toBe(1)
    }),
    test("Multiple Numbers", () => {
        expect(add("1,2")).toBe(3)
    }),
    test("Including \\n", () => {
        expect(add("1,2\n3")).toBe(6)
    }),
    test("Different Delimiters", () => {
        expect(add("//;\n1;2")).toBe(3)
    })
});