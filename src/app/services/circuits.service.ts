import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { RequestService } from "./request.service";
import { URL_LOCALHOST, CIRCUITS_URLS } from './../constants/urls';

@Injectable()
export class CircuitsService {
    urlLocalhost: string = URL_LOCALHOST;

    driverSelectYearUrl: string = this.urlLocalhost;
    constructor(private _http: Http, private _requestService: RequestService) { }
   
    /**
     * /2012/circuits.json
     * @param year Number to filt select year circuits
     */
    findSelectYearCircuits(year)
    {
      return this._requestService.getRequest(this.urlLocalhost + year + CIRCUITS_URLS.SELECT);
    }

    /**
     * /circuits.json?limit=100
     * Show all circuits
     */
    findAllCircuits()
    {
      return this._requestService.getRequest(this.urlLocalhost + CIRCUITS_URLS.ALL_HISTORY);
    }

}
