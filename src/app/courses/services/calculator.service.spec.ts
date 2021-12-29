import { TestBed } from "@angular/core/testing";
import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe('CalculatorService', () => {

  let calculator: CalculatorService,
  loggerSpy: any;

  beforeEach(() => {
    console.log("Calling beforeEach");
    loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);

    // TestBed using dependency injection
    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        {provide: LoggerService, useValue: loggerSpy}
      ]
    });

    // Now we no longer call the constructor of the service but use TestBed
    calculator = TestBed.inject(CalculatorService);
  });

  it('should add two numbers', () => {
    console.log("Add Test");
    const result = calculator.add(2,2);
    expect(result).toBe(4);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

  it('should substract two numbers', () => {
    console.log("Subtract Test");
    const result = calculator.subtract(2,2);
    expect(result).toBe(0, "unexpteced substraction result");
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

});
