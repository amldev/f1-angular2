import { Component, OnInit, Input, Directive } from '@angular/core';
import { SharedService } from "./../../shared.service";
import { ActivatedRoute } from "@angular/router";
import { Driver } from "./driver.model";
import { WikipediaMobileUrlPipe } from './../../pipes/app.pipe';

@Component({
  selector: 'driver-details',
  templateUrl: './driver.component.html',
  styleUrls: ['./drivers.component.css'],

})
export class DriverDetailsComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Input() model: Driver; 

}
