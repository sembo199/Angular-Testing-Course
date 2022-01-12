fdescribe('Async Testing Examples', () => {

  it('async test example with jasmine done', (done: DoneFn) => {
    let test = false;

    setTimeout(() => {
      console.log("Assertions executed");
      test = true;
      expect(test).toBeTrue();
      done();
    }, 1000);

  });

});
