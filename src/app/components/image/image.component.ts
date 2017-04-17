import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  styles: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input('title') title:string = "Formula 1 - Main";

  constructor () {
    
  }

  ngOnInit() {

  }



}
