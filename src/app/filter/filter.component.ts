import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() Filter = new EventEmitter();
  counter=0;
  FilterFunction()
  {
    this.counter=this.counter+1;
    this.Filter.emit(this.counter);
  }
  constructor() { }

  ngOnInit() {
  }

}
