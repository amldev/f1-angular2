import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { RequestService } from "./request.service";
import { URL_LOCALHOST, DRIVERS_URLS, SEASONS_URLS, CIRCUITS_URLS } from './../constants/urls';

@Injectable()
export class SharedService {
    urlLocalhost: string = URL_LOCALHOST;

    allf1SeasonsURL: string = this.urlLocalhost + SEASONS_URLS.ALL_SEASONS_URL;
    driverSelectYearUrl: string = this.urlLocalhost;
    constructor(private _http: Http, private _requestService: RequestService) { }

    //World championship drivers http://ergast.com/api/f1
    //Check select driver world champion: http://ergast.com/api/f1/driverStandings/1/drivers/<driverId>
    findF1SeasonsList() //GET
    {
      return this._requestService.getRequest(this.allf1SeasonsURL);
    }

    findSelectYearDrivers(year)
    {
      console.log(this.urlLocalhost + year + DRIVERS_URLS.ALL_DRIVERS_SELECT);
      return this._requestService.getRequest(this.urlLocalhost + year + DRIVERS_URLS.ALL_DRIVERS_SELECT);
    }

    /**
     * /drivers/<driverId>.json
     * @param driverId Show select driver info details
     */
    findSelectDriverWithId(driverId)
    {
      return this._requestService.getRequest(this.urlLocalhost + DRIVERS_URLS.SELECT_DRIVER_BEFORE_ID + driverId + ".json");
    }

    /**
     * /drivers.json?limit=50&offset=1
     * @param limit Items per page (max 100)
     * @param page show page number
     */
    findAddlDriversByPageAndResultsPerPage(limit, page)
    {

    }

    /**
     *  /driverStandings/1/drivers.json?limit=100
     */
    findMinOneTimeWorldChampion()
    {
      return this._requestService.getRequest(this.urlLocalhost + DRIVERS_URLS.ONE_TIME_WORLD_CHAMPION_F1);
    }
   
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
