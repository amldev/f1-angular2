import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class SharedService {
    f1SeasonsURL: string = "http://ergast.com/api/f1/seasons.json?limit=100";
    circuitsUrl: string = "http://ergast.com/api/f1/2012.json";
    constructor(private _http: Http) { }

    findF1SeasonsList() //GET
    {
      return this.getRequest(this.f1SeasonsURL);
    }

    findSelectYearDrivers(url)
    {
      return this.getRequest(url);
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
