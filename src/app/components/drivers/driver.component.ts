import { Component, OnInit } from '@angular/core';
import { SharedService } from "./../../shared.service";
import { ActivatedRoute } from "@angular/router";
import { Driver } from "./driver.model"

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriverDetailsComponent implements OnInit {
  driverId:string;
  driver: any;
  isLoading: boolean = true;
  private sub:any;

  //Driver data   this.name = this.driver.givenName + this.driver.familyName;
  name: string;
  dateOfBirth: string;
  permanentNumber: number;
  nationality: string;
  url: string;

  constructor(private _sharedService: SharedService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.driverId = params['id']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
       this.getLastYearDrivers();
    });
    
  }

  getLastYearDrivers() {
    this.setIsLoadingProgress();
    this._sharedService.findSelectDriverWithId(this.driverId)
      .subscribe(
      lstresult => {
        console.log("Load data!");
        this.driver = lstresult["MRData"]["DriverTable"]["Drivers"][0];
        console.log(this.driver.nationality);
        this.name = this.driver.givenName + " " + this.driver.familyName;
        this.nationality = this.driver.nationality;
        this.url = this.driver.url;
        this.dateOfBirth = this.driver.dateOfBirth;
        this.permanentNumber = this.driver.permanentNumber;
        
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
