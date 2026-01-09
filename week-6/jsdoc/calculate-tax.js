/**
 *
 * @param {number} amount The amount of revenue to which taxes should be applied
 * @param {number} tax The percentage of tax that should be applied
 * @returns {number}
 */
function calculateTax(amount, tax) {
  return amount * tax;
}

calculateTax(10000, 0.3);
