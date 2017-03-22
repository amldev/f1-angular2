export class Marker implements MarkerIF {
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

export interface MarkerIF{
    /**
     * Marker name
     */
    name:string;

    /**
     * Marker location.
     * lat: Latitude / lng: Longitude
     */
    lat:number;
    lng:number;

    /**
     * Locality to celebrate Grand Prix. For example: Barcelona (Spain)
     */
    locality:string;
}
