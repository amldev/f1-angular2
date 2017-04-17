import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  styles: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input('type') type:string = "";
  @Input('src') src:string;
  default: string = "./assets/img/circuits/nocircuit.png";

  constructor () {
    
  }

  ngOnInit() {

  }



}
