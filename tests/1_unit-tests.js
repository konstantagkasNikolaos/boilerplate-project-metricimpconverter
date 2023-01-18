const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
  suite("getNum function Test", function () {
    test("whole number input", function () {
      assert.equal(100, convertHandler.getNum("100kg"));
    });

    test("decimal number input", function () {
      assert.equal(100.5, convertHandler.getNum("100.50l"));
    });

    test("fractional input", function () {
      assert.equal(10, convertHandler.getNum("100/10kg"));
    });

    test("fractional input with decimal", function () {
      assert.equal(10.01, convertHandler.getNum("100.10/10kg"));
    });

    test("double-fraction", function () {
      assert.equal("invalid number", convertHandler.getNum("3/2/3kg"));
    });

    test("default-input", function () {
      assert.equal(1, convertHandler.getNum("kg"));
    });
  });

  suite("getUnit function Test", function () {
    test("input kg", function () {
      assert.equal("kg", convertHandler.getUnit("100kg"));
    });

    test("input l", function () {
      assert.equal("L", convertHandler.getUnit("100.50l"));
    });

    test("input km", function () {
      assert.equal("km", convertHandler.getUnit("10km"));
    });

    test("input mi", function () {
      assert.equal("mi", convertHandler.getUnit("mi"));
    });

    test("input gal", function () {
      assert.equal("gal", convertHandler.getUnit("100gal"));
    });

    test("input lbs", function () {
      assert.equal("lbs", convertHandler.getUnit("4lbs"));
    });

    test("wrong-input tons", function () {
      assert.equal("invalid unit", convertHandler.getUnit("100Tons"));
    });

    test("wrong-input tstss", function () {
      assert.equal("invalid unit", convertHandler.getUnit("100tstss"));
    });
  });

  suite("getReturnUnit function Test", function () {
    test("kg", function () {
      assert.equal("lbs", convertHandler.getReturnUnit("kg"));
    });

    test("L", function () {
      assert.equal("gal", convertHandler.getReturnUnit("L"));
    });

    test("km", function () {
      assert.equal("mi", convertHandler.getReturnUnit("km"));
    });

    test("mi", function () {
      assert.equal("km", convertHandler.getReturnUnit("mi"));
    });

    test("gal", function () {
      assert.equal("L", convertHandler.getReturnUnit("gal"));
    });

    test("lbs", function () {
      assert.equal("kg", convertHandler.getReturnUnit("lbs"));
    });
  });

  suite("spellOutUnit function Test", function () {
    test("kg", function () {
      assert.equal("kilograms", convertHandler.spellOutUnit("kg"));
    });

    test("L", function () {
      assert.equal("liters", convertHandler.spellOutUnit("L"));
    });

    test("km", function () {
      assert.equal("kilometers", convertHandler.spellOutUnit("km"));
    });

    test("mi", function () {
      assert.equal("miles", convertHandler.spellOutUnit("mi"));
    });

    test("gal", function () {
      assert.equal("gallons", convertHandler.spellOutUnit("gal"));
    });

    test("lbs", function () {
      assert.equal("pounds", convertHandler.spellOutUnit("lbs"));
    });
  });

  suite("getString function Test", function () {
    test("kg", function () {
      assert.equal(
        "1 kilograms converts to 100 pounds",
        convertHandler.getString(1, "kg", 100, "lbs")
      );
    });

    test("L", function () {
      assert.equal(
        "100 liters converts to 10 gallons",
        convertHandler.getString(100, "L", 10, "gal")
      );
    });
  });

  suite("convert function Test", function () {
    test("gal to l", function () {
      assert.equal(378.541, convertHandler.convert(100, "gal"));
    });

    test("L to gal", function () {
      assert.equal(26.41722, convertHandler.convert(100, "L"));
    });

    test("mi to km", function () {
      assert.equal(160.934, convertHandler.convert(100, "mi"));
    });

    test("km to mi", function () {
      assert.equal(62.13727, convertHandler.convert(100, "km"));
    });

    test("lbs to kg", function () {
      assert.equal(45.3592, convertHandler.convert(100, "lbs"));
    });

    test("kg to lbs", function () {
      assert.equal(220.46244, convertHandler.convert(100, "kg"));
    });
  });
});
