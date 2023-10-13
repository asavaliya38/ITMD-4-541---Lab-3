document.addEventListener("DOMContentLoaded", function () {
  const billTotalInput = document.getElementById("billTotal");
  const tipInput = document.getElementById("tip");
  const tipPercentageInput = document.getElementById("tipPercentage");
  const tipAmountInput = document.getElementById("tipAmount");
  const totalBillWithTipInput = document.getElementById("totalBillWithTip");

  function calculateTip() {
    const billTotal = parseFloat(billTotalInput.value);
    const tipValue = parseInt(tipInput.value);

    if (!isNaN(billTotal)) {
      const tipAmount = (billTotal * tipValue) / 100;
      const totalBillWithTip = billTotal + tipAmount;

      tipPercentageInput.value = tipValue + "%";
      tipAmountInput.value = tipAmount.toFixed(2);
      totalBillWithTipInput.value = totalBillWithTip.toFixed(2);
    } else {
      tipPercentageInput.value = "";
      tipAmountInput.value = "";
      totalBillWithTipInput.value = "";
    }
  }

  billTotalInput.addEventListener("input", calculateTip);
  tipInput.addEventListener("input", calculateTip);
});
