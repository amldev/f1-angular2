import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  styles: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input('type') type:string = "";
  @Input('src') src:string;
  default: string;

  constructor () {
    
  }

  ngOnInit() {
    console.log(this.type);
    if (this.type)
    {
        this.default = "./assets/img/flags/Unknown.png";
        console.log("Default: " + this.default);
    }
  }



}
