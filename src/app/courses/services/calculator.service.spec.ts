import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe('CalculatorService', () => {

  // To test with hot reloading, use: ng test
  // To test once without hot reloading, use: ng test --no-watch

  it('should add two numbers', () => {

    // Not yet ready, use pending
    //pending();

    // Creating actual instance of service
    //const logger = new LoggerService();
    // Jasmine Spy takes the instance of loggerService
    // and replaces the function with a new implementation
    //spyOn(logger, 'log');

    /** ALTERNATIVE (preferred)
     *  Test Suite should only have on instance of a service
     *  This should be its own service. Using LoggerService here is a bad practice
     *  You should use the following instead
     */

    const logger = jasmine.createSpyObj('LoggerService', ['log']);

    // Setup phase, prepare the test with the things you need
    const calculator = new CalculatorService(logger);

    // Execution phase, trigger the operation we want to test
    const result = calculator.add(2,2);

    // Assertion phase, check the results
    expect(result).toBe(4);

    expect(logger.log).toHaveBeenCalledTimes(1);

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
