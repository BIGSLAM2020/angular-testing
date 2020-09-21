import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { CounterComponent } from './counter.component';
import { By } from '@angular/platform-browser';

describe('CounterComponent', () => {
    var component: CounterComponent;
    var fixture: ComponentFixture<CounterComponent>;
    var debugElement: DebugElement;
    var htmlElement: HTMLElement;

  beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations : [CounterComponent]
      }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CounterComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();

        debugElement = fixture.debugElement.query(By.css('p'));
        htmlElement = debugElement.nativeElement;
    });

    it ('should increment the counter number by one' , () => {
        //arrange
        var initialValue = component.counter;

        //act
        component.increment();
        fixture.detectChanges();
        var newValue = component.counter;

        //assert
        expect(newValue).toBeGreaterThan(initialValue);
        //newValue prints out 3 
        //initialValue prints out 2
        console.log(newValue + ' is greater than ' + initialValue);
    });

    it('should decrement the counter number by one', () => {
        //arrange
        var initialValue = component.counter;

        //act
        component.decrement();
        fixture.detectChanges();
        var newValue = component.counter;

        //assert
        expect(newValue).toBeLessThan(initialValue);
        //newValue prints out 1
        //initialValue prints out 2
        console.log(newValue + ' is less than ' + initialValue);
    });

    it('should display the current number of the counter', () => {
       //assert the number of your screen is of number: 2
        fixture.detectChanges();
        expect(htmlElement.textContent).toEqual('Number: 2');
        console.log('Show print out two: ' + htmlElement.textContent);
    });

    it('should display the counter number on screen, after being incremented to three', () => {
        component.increment();
        fixture.detectChanges();
        //assert the number of your screen is of number: 3
        expect(htmlElement.textContent).toEqual('Number: 3');
        console.log('The value is incremented to three: ' + htmlElement.textContent);
    });

    it('should display the counter number on screen, after being decremented to one', () => {
        component.decrement();
        fixture.detectChanges();
        //assert the number of your screen is of number: 1
        expect(htmlElement.textContent).toEqual('Number: 1');
        console.log('The value is decremented by 1: ' + htmlElement.textContent);
    });

    it ('adding another incremented number', () => {
        component.increment();
        fixture.detectChanges();
        fixture.autoDetectChanges();
        //console.log(CounterComponent.apply);
        //let me asssert some changes to the numbers increasing
        expect(htmlElement.textContent).toEqual('Number: 3');
        //console logging 
        console.log('Adding another incremented nummber: show print out 3: ' + htmlElement.textContent);
    });
});
