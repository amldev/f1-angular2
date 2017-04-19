import { Component, OnInit } from '@angular/core';
import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'navigation-menus',
  templateUrl: './navigation-menus.component.html',
  styleUrls: ['./navigation-menus.component.css']
})
export class NavigationMenusComponent implements OnInit {
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
