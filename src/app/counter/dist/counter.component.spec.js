"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var counter_component_1 = require("./counter.component");
var platform_browser_1 = require("@angular/platform-browser");
describe('CounterComponent', function () {
    var component;
    var fixture;
    var debugElement;
    var htmlElement;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [counter_component_1.CounterComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(counter_component_1.CounterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        debugElement = fixture.debugElement.query(platform_browser_1.By.css('p'));
        htmlElement = debugElement.nativeElement;
    });
    it('should increment the counter number by one', function () {
        //arrange
        var initialValue = component.counter;
        //act
        component.increment();
        fixture.detectChanges();
        var newValue = component.counter;
        //assert
        expect(newValue).toBeGreaterThan(initialValue);
        console.log(newValue, initialValue);
    });
    it('should decrement the counter number by one', function () {
        //arrange
        var initialValue = component.counter;
        //act
        component.increment();
        fixture.detectChanges();
        var newValue = component.counter;
        //assert
        expect(initialValue).toBeLessThan(newValue);
        console.log(newValue, initialValue);
    });
    it('should display the current number of the counter', function () {
        //assert the number of your screen is of number: 1
        fixture.detectChanges();
        expect(htmlElement.textContent).toEqual('Number: 2');
        console.log(htmlElement.textContent);
    });
    it('should display the counter number on screen, after being incremented by one', function () {
        component.increment();
        fixture.detectChanges();
        //assert the number of your screen is of number: 1
        expect(htmlElement.textContent).toEqual('Number: 3');
        console.log(htmlElement.textContent);
    });
    it('should display the counter number on screen, after being decremented by one', function () {
        component.decrement();
        fixture.detectChanges();
        //assert the number of your screen is of number: 1
        expect(htmlElement.textContent).toEqual('Number: 1');
    });
    it('adding another number', function () {
        component.increment();
        fixture.detectChanges();
        fixture.autoDetectChanges();
        //console.log(CounterComponent.apply);
        //let me asssert some changes to the numbers increasing
        expect(htmlElement.textContent).toEqual('Number: 3');
        //console logging 
        console.log(htmlElement.textContent);
    });
});
