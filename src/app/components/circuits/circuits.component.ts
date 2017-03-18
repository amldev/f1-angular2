import { Component, OnInit } from '@angular/core';
import { SharedService } from "./../../shared.service";

@Component({
  selector: 'app-circuits',
  templateUrl: './circuits.component.html',
  styleUrls: ['./circuits.component.css']
})
export class CircuitsComponent implements OnInit {

  isLoading: boolean = true;
  circuits: any;
  constructor(private _sharedService: SharedService) {}

  ngOnInit() {

    this.selectYearCircuits(new Date().getFullYear());
  }

  selectYearCircuits(year) {
    this.setIsLoadingProgress();
    this._sharedService.findSelectYearCircuits(year)
      .subscribe(
      lstresult => {

        this.circuits = lstresult["MRData"]["CircuitTable"]["Circuits"];
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
