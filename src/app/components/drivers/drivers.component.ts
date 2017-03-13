import { Component, OnInit } from '@angular/core';
import { SharedService } from "./../../shared.service";

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {
  isLoading: boolean = true;
  constructor(private _sharedService: SharedService) {}
//
  ngOnInit() {
    this.getLastYearDrivers();
  }
  drivers: any;

  getLastYearDrivers() {
    this.setIsLoadingProgress();
    this._sharedService.findSelectYearDrivers(2016)
      .subscribe(
      lstresult => {

        this.drivers = lstresult["MRData"]["DriverTable"]["Drivers"];
        this.isLoadingFinish();
      },
      error => {
        console.log("Error. The findWeather result JSON value is as follows:");
        console.log(error); 
        this.isLoadingFinish();
      }
      );
  }

  setIsLoadingProgress()
  {
    this.isLoading = true;
  }

  isLoadingFinish()
  {
    this.isLoading = false;
  }

}
