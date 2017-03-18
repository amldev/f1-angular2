import { Component, Input, OnInit } from '@angular/core';
import { Marker } from './marker';

@Component({
  selector: 'google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})


export class GoogleMapsComponent implements OnInit{
  markers: any = [];
  lat: number = 23.022505;
  lng: number = 72.571362;
  @Input('circuitsData') circuits:any;

  ngOnInit()
  {
    console.log(this.circuits.length);

    if (this.circuits.length == 0)
    {
      this.markers.push(new Marker("jajajja", this.lat, this.lng, "Test"));
      console.log(this.markers.length);
    }
    else
    {
      for (let i = 0; i <this.circuits.length; i++)
      {
        this.markers.push(new Marker(this.circuits[i].circuitName, +this.circuits[i].Location.lat, +this.circuits[i].Location.long, this.circuits[i].Location.locality));
      }

      console.log(this.markers.length);
    }
  }


}
