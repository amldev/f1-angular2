import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class SharedService {
    urlLocalhost: string = "http://ergast.com/api/f1/";
    allf1SeasonsURL: string = this.urlLocalhost + "seasons.json?limit=100";
    driverSelectYearUrl: string = this.urlLocalhost;
    constructor(private _http: Http) { }

    findF1SeasonsList() //GET
    {
      return this.getRequest(this.allf1SeasonsURL);
    }

    findSelectYearDrivers(year)
    {
      console.log(this.urlLocalhost + year + "/drivers.json");
      return this.getRequest(this.urlLocalhost + year + "/drivers.json");
    }

    //circuitsUrl: "http://ergast.com/api/f1/2012.json";

    findSelectYearCircuits(year)
    {
      return this.getRequest(this.urlLocalhost + year + ".json");
    }

    //Function to make GET Requests
    getRequest(url)
    {
      console.log(url);
      return this._http.get(url)
          .map(response => {
              { return response.json() };
          })
          .catch(error => Observable.throw(error.json()));
    }

    //Function to make POST Requests

}
