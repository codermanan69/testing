const { sub } = require("./calculator");

test("add negative numbers correctly", () => {
    const a = 2;
    const b = 4

    const result = sub(a, b)

    expect(result).toBe(6)
});