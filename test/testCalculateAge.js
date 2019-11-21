const calculateAge = require("../src/calculateAge.js").calculateAge;
const assert = require("assert");

describe("calculateAge", function() {
  it("should calulate age of valid dob", function() {
    assert.deepEqual(calculateAge("20", 11, 2019), [0, 0, 1]);
  });
});
