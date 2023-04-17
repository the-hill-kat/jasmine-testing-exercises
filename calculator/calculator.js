window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = {amount: 100000, years: 30, rate: 5};
  const UIAmount = document.getElementById("loan-amount");
  const UIYears = document.getElementById("loan-years");
  const UIRate = document.getElementById("loan-rate");
  UIAmount.value = values.amount;
  UIYears.value = values.years;
  UIRate.value = values.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const values = getCurrentUIValues();
  const monthlyPayment = calculateMonthlyPayment(values);
  updateMonthly(monthlyPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const P = values.amount;
  const i = (values.rate / 12) / 100;
  const n = values.years * 12;
  const monthlyPayment = (P * i) / (1 - (1 + i) ** -n);
  return monthlyPayment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const UIMonthly = document.getElementById("monthly-payment");
  UIMonthly.innerText = '$' + monthly;
}
