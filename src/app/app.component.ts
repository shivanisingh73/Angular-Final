import { Component, OnInit } from '@angular/core';
import {array} from './json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = array;


}
