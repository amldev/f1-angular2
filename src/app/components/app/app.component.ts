import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
window.focus(); // make sure we are on this page before we start typing
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  lat: number = 23.022505;  
  lng: number = 72.571362;  
  constructor(public router: Router) {}

  keyChange(event) {
    console.log("Receive event" +  event[0] + " / " + event[1]);

    if (event[1] == "39")
    {
      this.router.navigate(['/circuits']); 
    }
  }
  
}
