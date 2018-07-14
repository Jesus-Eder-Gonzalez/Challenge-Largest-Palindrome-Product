/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function (digits) {
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  let tempFactor_0 = Math.pow(10, digits) - 1;
  let tempFactor_1 = tempFactor_0;
  let currentProduct = 0;
  let currentString = '';

  while (tempFactor_1 > 0) {

    while (tempFactor_0 > 0) {
      currentProduct = tempFactor_0 * tempFactor_1;
      currentString = currentProduct.toString();
      currentStringReverse = currentString.split('').reverse().join('');

      if ((currentString === currentStringReverse) && (currentProduct > palindromeNumber)) {
        palindromeNumber = currentProduct;
        factor_0 = tempFactor_0;
        factor_1 = tempFactor_1;
        break;
      }

      if (currentProduct < palindromeNumber) {
        break;
      }

      tempFactor_0--;
    }

    tempFactor_1--;
    tempFactor_0 = tempFactor_1;
  }

  return {
    factor_0: factor_0,
    factor_1: factor_1,
    palindromeNumber: palindromeNumber
  };
};