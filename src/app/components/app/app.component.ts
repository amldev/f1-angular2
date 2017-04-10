import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
window.focus(); // make sure we are on this page before we start typing
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
  constructor(public router: Router) {}

  keyChange(event) {
    console.log("Receive event" +  event[0] + " / " + event[1]);

    //Define Angular application navigation and actions
    if (event[1] == "39") //Right arrow
    {
      this.router.navigate(['/circuits']); 
    }
    if (event[1] == "37" || event[1] == "83") // Left arrow
    {
      this.router.navigate(['/seasons']); 
    }
    if (event[1] == "68") //"D"
    {
      this.router.navigate(['/drivers']);
    }
  }
  
}
