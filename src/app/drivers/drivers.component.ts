import { Component, OnInit } from '@angular/core';
import { SharedService } from "./../shared.service";

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  constructor(private _sharedService: SharedService) {}
//
  ngOnInit() {
    this.getLastYearDrivers();
  }
  drivers: any;

  getLastYearDrivers() {
    this._sharedService.findSelectYearDrivers("http://ergast.com/api/f1/2016/drivers.json")
      .subscribe(
      lstresult => {

        this.drivers = lstresult["MRData"]["DriverTable"]["Drivers"];
      },
      error => {
        console.log("Error. The findWeather result JSON value is as follows:");
        console.log(error);
      }
      );
  }

}
