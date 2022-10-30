
it('should calculate the monthly rate correctly', function () {
    const inp = {
      amount: 65000,
      years: 15,
      rate: 7.2
    }
    expect(calculateMonthlyPayment(inp)).toEqual('591.53');
  });
  
  
  it("should return a result with 2 decimal places", function() {
    const inp = {
      amount: 40084,
      years: 10,
      rate: 5.8
    }
    expect(calculateMonthlyPayment(inp)).toEqual('441.00');
  });
  
  it('should handle partial years', function(){
    const inp = {
      amount: 40084,
      years: 10.6,
      rate: 5.8
    }
    expect(calculateMonthlyPayment(inp)).toEqual('423.08');
  });