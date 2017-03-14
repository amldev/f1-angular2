export class Driver
{
    id: string;
    name: string;
    dateOfBirth: string;
    permanentNumber: number;
    nationality: string;
    url: string;

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
    }
}