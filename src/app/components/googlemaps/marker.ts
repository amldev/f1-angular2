export class MarkerItem implements marker {
  name: string;
  lat:number;
  lng:number;
  locality:string;
  constructor(name: string, lat: number, lng: number, locality: string)
  {
    this.name = name;
    this.lat = lat;
    this.lng = lng;
    this.locality = locality;
  }
}

export interface marker{
    name:string;
    lat:number;
    lng:number;
    locality:string;
}
