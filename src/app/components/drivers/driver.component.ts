import { Component, OnInit } from '@angular/core';
import { SharedService } from "./../../shared.service";

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriverDetailsComponent implements OnInit {
  isLoading: boolean = true;
  constructor(private _sharedService: SharedService) {}
//https://angular-2-training-book.rangle.io/handout/routing/routeparams.html
  ngOnInit() {
    this.getLastYearDrivers();
  }
  drivers: any;

  getLastYearDrivers() {
    this.setIsLoadingProgress();
    this._sharedService.findSelectDriverWithId("alonso")
      .subscribe(
      lstresult => {
        console.log("Load data!");
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
