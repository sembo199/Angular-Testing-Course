import { fakeAsync, flush, tick } from "@angular/core/testing";

fdescribe('Async Testing Examples', () => {

  it('async test example with jasmine done', (done: DoneFn) => {
    let test = false;

    setTimeout(() => {
      console.log("Running assertions");
      test = true;
      expect(test).toBeTrue();
      done();
    }, 1000);

  });

  it('async test example - setTimeout()', fakeAsync(() => {
    let test = false;

    setTimeout(() => {});

    setTimeout(() => {
      console.log("Running assertions setTimeout()");
      test = true;
    }, 1000);

    // Tick controls evolution of time inside the fakeAsync code block
    // tick(500);
    // tick(499);
    // tick(1);

    // Flush will finish all async functions
    flush();

    // Would still work here
    expect(test).toBeTrue();
  }));

});
