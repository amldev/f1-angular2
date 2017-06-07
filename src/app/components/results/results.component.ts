import { Component, OnInit, Input } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {DriversService} from './../../services/drivers.service';

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
    @Input('type') type: String;
    lastRaceData: any;
    drivers: any;
    driversNationalityFlags: any = [];
    profilePhotos: any = [];
    constructor(private translate: TranslateService, private _sharedService: DriversService) {
        console.log('Select language: ' + localStorage.getItem('selectLanguage'));
        if (localStorage.getItem('selectLanguage') == null || localStorage.getItem('selectLanguage') === 'null') {
        localStorage.setItem('selectLanguage', 'en');
        console.log('Change language to ' + localStorage.getItem('selectLanguage'));
        }

        translate.setDefaultLang(localStorage.getItem('selectLanguage')); 
    }

    ngOnInit() {
        console.log(this.type);
        if (this.type === 'last_race') { this.getLastResultsOfLastGP(); }

    }

    getLastResultsOfLastGP() {
        this._sharedService.getLastResultsOfLastGP()
        .subscribe(
        lstresult => {
            this.addDataAboutDrivers(lstresult);
        },
        error => {
            console.log('Error. The findWeather result JSON value is as follows:');
            console.log(error);
        }
        );
    }

    addDataAboutDrivers(lstresult) {
        this.lastRaceData = lstresult['MRData']['RaceTable']['Races'][0];

        this.drivers = this.lastRaceData['Results'];

        console.log(this.drivers.length);

        // Save nationality flags with all url
        for (let i = 0; i < this.drivers.length; i++) {
            console.log(this.drivers[i].Driver.nationality);
            this.driversNationalityFlags.push('./assets/img/flags/' + this.drivers[i].Driver.nationality + '.png');
            this.profilePhotos.push('./assets/img/drivers/' + this.drivers[i].Driver.driverId + '.png');
        }
    }

}
