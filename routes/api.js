"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  app.route("/api/convert").get((req, res) => {
    const { input } = req.query;
    let result;

    const initNum = convertHandler.getNum(input);
    if (initNum === "invalid number") {
      result = initNum;
    }

    const initUnit = convertHandler.getUnit(input);

    if (initUnit === "invalid unit") {
      if (result === "invalid number") {
        result += " and unit";
      } else {
        result = initUnit;
      }
    }

    if (!result) {
      const returnUnit = convertHandler.getReturnUnit(initUnit);
      const returnNum = convertHandler.convert(initNum, initUnit);
      const string = convertHandler.getString(
        initNum,
        initUnit,
        returnNum,
        returnUnit
      );

      result = { initNum, initUnit, returnUnit, returnNum, string };
    }

    res.send(result);
  });
};
