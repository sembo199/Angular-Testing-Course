import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe('CalculatorService', () => {

  // To test with hot reloading, use: ng test
  // To test once without hot reloading, use: ng test --no-watch

  it('should add two numbers', () => {

    // Not yet ready, use pending
    //pending();

    // Setup phase, prepare the test with the things you need
    const calculator = new CalculatorService(new LoggerService());

    // Execution phase, trigger the operation we want to test
    const result = calculator.add(2,2);

    // Assertion phase, check the results
    expect(result).toBe(4);

  });

  it('should substract two numbers', () => {

    // Fail programatically
    // fail();

    // Setup phase, prepare the test with the things you need
    const calculator = new CalculatorService(new LoggerService());

    // Execution phase, trigger the operation we want to test
    const result = calculator.subtract(2,2);

    // Assertion phase, check the results
    expect(result).toBe(0, "unexpteced substraction result");

  });

});
