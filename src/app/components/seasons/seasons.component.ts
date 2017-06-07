import { Component, OnInit } from '@angular/core';
import { SharedService } from './../../services/shared.service';
@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {

  seasons: any;
  URL = '';
  title = 'Seasons';

  isLoading = false;

  constructor(private _sharedService: SharedService) {
  }

  ngOnInit() {
    this.getSeasons();
  }

  getSeasons() {
    this._sharedService.findF1SeasonsList()
      .subscribe(
      lstresult => {

        this.seasons = lstresult['MRData']['SeasonTable']['Seasons'];
        this.URL = lstresult['MRData']['url'];
        console.log('URL: ' + this.URL);
        console.log('SEASONS: ' + this.seasons[0]['season']);
      },
      error => {
        console.log('Error. The findWeather result JSON value is as follows:');
        console.log(error);
      }
      );
  }

}
