import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { Http } from '@angular/http';

export function createTranslateLoader(http: Http) {
    return new TranslateHttpLoader(http, 'https://raw.githubusercontent.com/mugan86/angular-4-playground/master/src/assets/i18n/', '.json');
}