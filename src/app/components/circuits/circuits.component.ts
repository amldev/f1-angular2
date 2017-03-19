import { Component, OnInit } from '@angular/core';
import { SharedService } from "./../../shared.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-circuits',
  templateUrl: './circuits.component.html',
  styleUrls: ['./circuits.component.css']
})
export class CircuitsComponent implements OnInit {

  isLoading: boolean = true;
  circuits: any;
  sub: any;
  constructor(private _sharedService: SharedService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       console.log("Receive param: " + params['id']); // (+) converts string 'id' to a number
       console.log("Receive param: " + params['year']); // (+) converts string 'id' to a number
      //console.log(this.model.name +  "   " + this.model.dateOfBirth + " " + this.model.url);
       // In a real app: dispatch action to load the details here.

    });
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
