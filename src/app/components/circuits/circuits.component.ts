import { Component, OnInit, Input} from '@angular/core';
import { SharedService } from "./../../shared.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-circuits',
  templateUrl: './circuits.component.html',
  styleUrls: ['./circuits.component.css']
})
export class CircuitsComponent implements OnInit {

  title: string;

  year: number;
  id: string;

  isLoading: boolean = true;
  circuits: any;
  sub: any;
  constructor(private _sharedService: SharedService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id == undefined) this.id = "-1";
      this.year = params['year'];
       console.log("Receive param: " + this.id); // (+) converts string 'id' to a number
       console.log("Receive param: " + this.year); // (+) converts string 'id' to a number
      //console.log(this.model.name +  "   " + this.model.dateOfBirth + " " + this.model.url);
       // In a real app: dispatch action to load the details here.

    });
    if (this.id == "-1")
    {
      if (this.year != undefined)
      {
        this.title = "F1 " + this.year + " circuits list";
        this.selectYearCircuits(this.year);
      }
      else
      {
        this.title = "F1 current year circuits list";
        this.selectYearCircuits(new Date().getFullYear());
      }
    }
    else if (this.id == "all")
    {
      this.title = "F1 all history circuits list";
      this.selectAllHistoryCircuits();
    }


  }

  selectYearCircuits(year) {
    this.setIsLoadingProgress();
    this._sharedService.findSelectYearCircuits(year)
      .subscribe(
      lstresult => {
        this.asignCircuitData(lstresult);
      },
      error => {
        console.log("Error. The findWeather result JSON value is as follows:");
        console.log(error);
        this.isLoadingFinish();
      }
    );
  }

  selectAllHistoryCircuits() {
    this.setIsLoadingProgress();
    this._sharedService.findAllCircuits()
      .subscribe(
      lstresult => {
        this.asignCircuitData(lstresult);
      },
      error => {
        console.log("Error. The findWeather result JSON value is as follows:");
        console.log(error);
        this.isLoadingFinish();
      }
    );
  }

  setIsLoadingProgress()
  {
    this.isLoading = true;
  }

  isLoadingFinish()
  {
    this.isLoading = false;
  }

  //Refactorize circuit data after receive from server
  asignCircuitData(lstresult)
  {
      this.circuits = lstresult["MRData"]["CircuitTable"]["Circuits"];
      this.isLoadingFinish();
  }

}
