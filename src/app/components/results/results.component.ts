import { Component, OnInit } from '@angular/core';
import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private translate:TranslateService) {
    console.info("Select language: " + localStorage.getItem('selectLanguage'));
    if (localStorage.getItem('selectLanguage') == null || localStorage.getItem('selectLanguage') == "null")
    {
      localStorage.setItem('selectLanguage', 'en');
      console.info("Change language to " + localStorage.getItem('selectLanguage'));
    }

    translate.setDefaultLang(localStorage.getItem('selectLanguage')); 
  }

  ngOnInit() {
  }

}
