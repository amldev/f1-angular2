import { Component, OnInit, Input } from '@angular/core';
import {TranslateService} from 'ng2-translate';
import {DriversService} from './../../services/drivers.service';

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
    @Input('type') type: String;
    drivers: any;
    driversNationalityFlags : any = [];
    constructor(private translate:TranslateService, private _sharedService: DriversService) {
        
        console.info("Select language: " + localStorage.getItem('selectLanguage'));
        if (localStorage.getItem('selectLanguage') == null || localStorage.getItem('selectLanguage') == "null")
        {
        localStorage.setItem('selectLanguage', 'en');
        console.info("Change language to " + localStorage.getItem('selectLanguage'));
        }

        translate.setDefaultLang(localStorage.getItem('selectLanguage')); 
    }

    ngOnInit() {
        console.log(this.type);
    }

    addDataAboutDrivers(lstresult)
    {
        this.drivers = lstresult["MRData"]["DriverTable"]["Drivers"];

        //Save nationality flags with all url
        for (var i = 0; i < this.drivers.length; i++)
        {
        this.driversNationalityFlags.push("./assets/img/flags/" + this.drivers[i].nationality + ".png");
        }
    }

}
