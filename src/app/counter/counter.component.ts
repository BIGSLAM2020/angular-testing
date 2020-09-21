import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
    [x: string]: any;


  counter: number;
  constructor() {
    this.counter = 2;
   }

   increment() {
     this.counter++;
   }

   decrement() {
     this.counter--;
   }

  ngOnInit(): void {
  }

}
