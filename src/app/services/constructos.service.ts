import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { RequestService } from "./request.service";
import { URL_LOCALHOST, CONSTRUCTORS_URLS } from './../constants/urls';

@Injectable()
export class ConstructorsService {
    urlLocalhost: string = URL_LOCALHOST;

    driverSelectYearUrl: string = this.urlLocalhost;
    constructor(private _http: Http, private _requestService: RequestService) { }
   
    /**
     * /2012/circuits.json
     * @param year Number to filt select year circuits
     */
    findSelectYearConstructor(year)
    {
      return this._requestService.getRequest(this.urlLocalhost + year + CONSTRUCTORS_URLS.SELECT_YEAR);
    }

    /**
     * /circuits.json?limit=100
     * Show all circuits
     */
    findAllConstructors()
    {
      return this._requestService.getRequest(this.urlLocalhost + CONSTRUCTORS_URLS.ALL_HISTORY);
    }

}
