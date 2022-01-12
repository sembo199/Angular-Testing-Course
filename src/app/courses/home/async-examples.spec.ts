import { fakeAsync, flush, flushMicrotasks, tick } from "@angular/core/testing";
import { of } from "rxjs";
import { delay } from "rxjs/operators";

describe('Async Testing Examples', () => {

  it('Async test example with jasmine done', (done: DoneFn) => {
    let test = false;

    setTimeout(() => {
      console.log("Running assertions");
      test = true;
      expect(test).toBeTrue();
      done();
    }, 1000);

  });

  it('Async test example - setTimeout()', fakeAsync(() => {
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

  it('Async test example - plain Promise', fakeAsync(() => {

    let test = false;

    console.log("Create promise");
    // Promises are prioritized over setTimeout.
    // Promise is a microtask and will run before regular tasks like setTimeout
    Promise.resolve().then(() => {
      console.log("Promise evaluated successfully");
      return Promise.resolve();
    }).then(() => {
      console.log("Promise evaluated before setTimeout(), while nested");
      test = true;
    });

    console.log("Running test assertions");

    flushMicrotasks();

    expect(test).toBeTrue();

  }));

  it('Async test example - Promises + setTimeout()', fakeAsync(() => {

    let counter = 0;

    Promise.resolve().then(() => {
      counter += 10;
      console.log("Counter in promise", counter);
      setTimeout(() => {
        counter += 1;
        console.log("Counter in setTimeout", counter);
      }, 1000);
    });

    expect(counter).toBe(0);
    flushMicrotasks();
    expect(counter).toBe(10);
    tick(500);
    expect(counter).toBe(10);
    tick(500);
    expect(counter).toBe(11);

  }));

  it('Async test example - Observables', fakeAsync(() => {

    let test = false;

    console.log("Creating observable");

    const test$ = of(test).pipe(delay(1000));

    test$.subscribe(() => {
      test = true;
    });

    tick(1000);

    expect(test).toBeTrue();

  }));

});
