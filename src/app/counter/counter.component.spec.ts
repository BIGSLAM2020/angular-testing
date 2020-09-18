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
    });

    it('should decrement the counter number by one', () => {
        //arrange
        var initialValue = component.counter;

        //act
        component.increment();
        fixture.detectChanges();
        var newValue = component.counter;

        //assert
      expect(initialValue).toBeLessThan(newValue);
    });

    it('should display the current number of the counter', () => {
       //assert the number of your screen is of number: 1
        fixture.detectChanges();
        expect(htmlElement.textContent).toEqual('Number: 1');
    });

    it('should display the counter number on screen, after being incremented by one', () => {
        component.increment();
        fixture.detectChanges();
        //assert the number of your screen is of number: 1
        expect(htmlElement.textContent).toEqual('Number: 2');
    });

    it('should display the counter number on screen, after being decremented by one', () => {
        component.decrement();
        fixture.detectChanges();
        //assert the number of your screen is of number: 1
        expect(htmlElement.textContent).toEqual('Number: 0');
    });


});
