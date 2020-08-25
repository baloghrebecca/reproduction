"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = changePriceFormat;

function changePriceFormat(preis) {
  if (preis === 0) {
    return '0.00';
  }

  if (preis === null) {
    return '0.00';
  }

  var priceToString = preis.toString();
  var priceAfterComma = priceToString.slice(priceToString.length - 2, priceToString.length);
  var priceBeforeComma = priceToString.slice(0, priceToString.length - 2);
  var priceToDisplay = "0.".concat(priceAfterComma);

  if (priceBeforeComma) {
    priceToDisplay = "".concat(priceBeforeComma, ".").concat(priceAfterComma);
  }

  return priceToDisplay;
}