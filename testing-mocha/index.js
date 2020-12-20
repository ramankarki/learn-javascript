function pow(x, n) {
  if (n < 0) return NaN;
  if (Math.round(n) != n) return NaN;
  return x ** n; // :) we cheat!
}

describe("pow", function () {

  describe("raises x to power 2", () => {

    function makeTest(x) {
      let expected = x * x;
      it(`${x} power 2 raises to ${expected}`, () => {
        assert.equal(pow(x, 2), expected);
      });
    }

    for (let i = 0; i <= 10; i++) {
      makeTest(i);
    }
  });

  it("for negative n the result is NaN", function() {
    assert.isNaN(pow(2, -1));
  });

  it("for non-integer n the result is NaN", function() {
    assert.isNaN(pow(2, 1.5));
  });
});

