import { Component, OnInit } from '@angular/core';
import { SharedService } from "./../../shared.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {
  isLoading: boolean = true;
  drivers: any;
  driversNationalityFlags : any = [];
  sub: any;
  filter: string;
  title: string;
  constructor(private _sharedService: SharedService, private route: ActivatedRoute) {}
//
  ngOnInit() {

    //Parameter manage
    this.sub = this.route.params.subscribe(params => {
      this.filter = params['filter'];
      if (this.filter == undefined) this.filter = "-1";
    });

    if (this.filter == "champs")
    {
      this.title = "F1 world champ drivers list";
      this.getWorldChampsDrivers();
    }
    else
    {
      this.title = "F1 Last Year Champ drivers list";
      this.getLastYearDrivers();
    }
    
  }

  getWorldChampsDrivers()
  {
    this.setIsLoadingProgress();
    this._sharedService.findMinOneTimeWorldChampion()
      .subscribe(
      lstresult => {
          this.addDataAboutDrivers(lstresult);
      },
      error => {
        console.log("Error. The findWeather result JSON value is as follows:");
        console.log(error);
        this.isLoadingFinish();
      }
    );
  }
  getLastYearDrivers() {
    this.setIsLoadingProgress();
    this._sharedService.findSelectYearDrivers(2016)
      .subscribe(
      lstresult => {

        this.addDataAboutDrivers(lstresult);
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

  addDataAboutDrivers(lstresult)
  {
    this.drivers = lstresult["MRData"]["DriverTable"]["Drivers"];

    //Save nationality flags with all url
    for (var i = 0; i < this.drivers.length; i++)
    {
      this.driversNationalityFlags.push("./assets/img/flags/" + this.drivers[i].nationality + ".png");
    }

    this.isLoadingFinish();
  }

}
