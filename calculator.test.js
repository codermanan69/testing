const { add } = require("./calculator");

test("add negative numbers correctly", () => {
    const a = 2;
    const b = -3

    const result = add(a, b)

    expect(result).toBe(-5)
});