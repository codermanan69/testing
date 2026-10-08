const { sub } = require("./calculator");

test("add negative numbers correctly", () => {
    const a = 2;
    const b = 43

    const result = sub(a, b)

    expect(result).toBe(100)
});