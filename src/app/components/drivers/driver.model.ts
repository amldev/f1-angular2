import { WikipediaMobileUrlPipe } from './../../pipes/wikipediaurlmobile.pipe';

export class Driver
{
    id: string;
    name: string;
    dateOfBirth: string;
    permanentNumber: number;
    nationality: string;
    profilePhoto: string;
    url: string;
    urlMobile: string;

    //constructor(){ }

    constructor(id: string, name: string, dateOfBirth: string,
                    permanentNumber: number, nationality: string, url: string)
    {
        this.id = id;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.nationality = nationality;
        this.permanentNumber = permanentNumber;
        this.url = url;

         //Transform wikipedia normal url to mobile url
        this.urlMobile = new WikipediaMobileUrlPipe().transform(this.url);

        //Load select pilot profile photo to use in details
        this.profilePhoto = "./assets/img/drivers/" + this.id + ".png";
    }

    //Getters

    getDateOfBirth()
    {
        return this.dateOfBirth;
    }

    getUrlMobile()
    {
        return this.urlMobile;
    }

    getUrl()
    {
        return this.url;
    }

    getProfilePhoto()
    {
        return this.profilePhoto;
    }
}
