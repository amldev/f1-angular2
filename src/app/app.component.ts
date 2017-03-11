import { Component } from '@angular/core';
import { SharedService } from "./shared.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app works!';

  seasons: any;
  URL: string = "";

  constructor(private _sharedService: SharedService) {
  }

  ngOnInit() {
    this.getSeasons();
  }

  getSeasons() {
    this._sharedService.findF1SeasonsList()
      .subscribe(
      lstresult => {

        this.seasons = lstresult["MRData"]["SeasonTable"]["Seasons"];
        this.URL = lstresult["MRData"]["url"];
        console.log("URL: " + this.URL);
        console.log("SEASONS: " + this.seasons[0]["season"]);
      },
      error => {
        console.log("Error. The findWeather result JSON value is as follows:");
        console.log(error);
      }
      );
  }
}
