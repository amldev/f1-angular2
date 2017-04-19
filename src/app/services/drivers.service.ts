import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { RequestService } from "./request.service";
import { URL_LOCALHOST, DRIVERS_URLS} from './../constants/urls';

@Injectable()
export class DriversService {
    urlLocalhost: string = URL_LOCALHOST;

    driverSelectYearUrl: string = this.urlLocalhost;
    constructor(private _http: Http, private _requestService: RequestService) { }

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
     * current/last/results.json
     */

    getLastResultsOfLastGP()
    {
      return this._requestService.getRequest(this.urlLocalhost + DRIVERS_URLS.LAST_GRAND_PRIX_RESULTS);
    }

}
