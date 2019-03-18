import { Component, OnInit, Input } from '@angular/core';
import {array} from '../json'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  //template:`<app-filter (Filter)='display($event)'></app-filter>`

})
export class BodyComponent implements OnInit {

  content:Array<4>;
  json=array;
  //@Input() public parentData;
  display(counter)
  {
    console.log(counter)
  }
  constructor() { }

  ngOnInit() {
  }

}
