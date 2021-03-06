import { Component, OnInit, Input } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input('title') title:string = "Formula 1 - Main";
  @Input('layoutType') layoutType: string = "";

  constructor (private translate:TranslateService) {
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
