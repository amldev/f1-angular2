import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {
  @Input('title') title:string = "Formula 1 - Main";
  @Input('layoutType') layoutType: string = "";
  
  constructor() { }

  ngOnInit() {
    
  }



}
