
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 10000,
    years: 5,
    rate: 5
  };
  expect(calculateMonthlyPayment(values)).toEqual('188.71');
});


it("should return a result with 2 decimal places", function() {
  const values = { amount: 100000, years: 30, rate: 3.5 };
    const monthlyPayment = calculateMonthlyPayment(values);
    const decimalPlaces = monthlyPayment.split(".")[1].length;
    expect(decimalPlaces).toEqual(2);
});

// it ("should calculate the monthly payment needed for a 10-year loan with a 3% interest rate and a $15,000 loan amount", function() {
//   const values = {amount: 15000, years: 10, rate: 3};
//   const monthlyPayment = calculateeMonthlyPayment(values);
//   expect(monthlyPayment).toEqual("144.24");
// });

//need to fix last one