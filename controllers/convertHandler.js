function ConvertHandler() {
  this.getNum = function (input) {
    const num = input.replace(/[a-zA-Z]+/g, "");
    const symbols = num.match(/\+|\-|\*|\//g);

    let result = "invalid number";
    if (symbols) {
      if (symbols.length < 2) result = eval(num);
    } else {
      result = num === "" ? 1 : num;
    }

    return result;
  };

  this.getUnit = function (input) {
    const validUnits = ["km", "mi", "l", "gal", "lbs", "kg"];
    let result = "invalid unit";
    let unit = input.toLowerCase().match(/[a-z]+/g);
    if (unit) {
      unit = unit[0];

      if (validUnits.find((v) => v == unit)) result = unit;
    }

    return result === "l" ? "L" : result;
  };

  this.getReturnUnit = function (initUnit) {
    switch (initUnit) {
      case "km":
        return "mi";
      case "mi":
        return "km";
      case "L":
        return "gal";
      case "gal":
        return "L";
      case "lbs":
        return "kg";
      case "kg":
        return "lbs";
    }
  };

  this.spellOutUnit = function (unit) {
    switch (unit) {
      case "km":
        return "kilometers";
      case "mi":
        return "miles";
      case "L":
        return "liters";
      case "gal":
        return "gallons";
      case "lbs":
        return "pounds";
      case "kg":
        return "kilograms";
      default:
        return;
    }
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    let result;

    switch (initUnit) {
      case "km":
        result = initNum / miToKm;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "L":
        result = initNum / galToL;
        break;
      case "gal":
        result = initNum * galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
    }

    return result.toFixed(5);
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(
      initUnit
    )} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;
