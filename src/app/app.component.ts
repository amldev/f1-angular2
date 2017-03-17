import { Component } from '@angular/core';
import { SharedService } from "./shared.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  lat: number = 23.022505;  
  lng: number = 72.571362;  
}
