import { Component, Input, OnInit } from '@angular/core';
import { marker } from './marker';

@Component({
  selector: 'google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})


export class GoogleMapsComponent implements OnInit{
  markers: marker[];
  lat: number = 23.022505;
  lng: number = 72.571362;
  @Input('circuitsData') circuits:any;

  ngOnInit()
  {
    console.log(this.circuits.length);

    if (this.circuits.length == 0)
    {
      //this.markers.push({name: "jajajja", lat: this.lat, lng: this.lng, locality: "Test"});
    }
    else
    {
      //this.markers.push({name: "jajajja", lat: this.lat, lng: this.lng, locality: "Test"});
    }
  }


}
