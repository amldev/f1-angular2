import { Component, OnInit } from '@angular/core';
import { SharedService } from "./../../shared.service";

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {
  isLoading: boolean = true;
  drivers: any;
  driversNationalityFlags : any = [];
  constructor(private _sharedService: SharedService) {}
//
  ngOnInit() {
    this.getLastYearDrivers();
  }


  getLastYearDrivers() {
    this.setIsLoadingProgress();
    this._sharedService.findSelectYearDrivers(2016)
      .subscribe(
      lstresult => {

        this.drivers = lstresult["MRData"]["DriverTable"]["Drivers"];

        //Save nationality flags with all url
        for (var i = 0; i < this.drivers.length; i++)
        {
          this.driversNationalityFlags.push("./assets/img/flags/" + this.drivers[i].nationality + ".png");
        }

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
