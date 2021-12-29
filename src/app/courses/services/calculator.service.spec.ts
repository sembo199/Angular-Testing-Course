import { TestBed } from "@angular/core/testing";
import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

// Disable entire test suite
//xdescribe('CalculatorService', () => {
// Focus on only one test suite
//fdescribe('CalculatorService', () => {
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

  // Disable single spec
  //xit('should substract two numbers', () => {
  // Focus on single spec
  //fit('should substract two numbers', () => {
  it('should substract two numbers', () => {
    console.log("Subtract Test");
    const result = calculator.subtract(2,2);
    expect(result).toBe(0, "unexpteced substraction result");
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

});
