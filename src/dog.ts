export interface IDog{
    id: number,
    nev: string,
    fajta: string,
    nem: boolean,
    eletkor: number,
    kepUrl: string
}

export default class Kutya {
     id : number | null;
     nev : string;
     fajta : string;
     nem: boolean;
     eletkor: number;
    kepUrl: string | null; 

    constructor(dog: IDog) {
    this.id = dog.id || null;
    this.nev = dog.nev;
    this.fajta = dog.fajta;
    this.nem = dog.nem;
    this.eletkor = dog.eletkor;
    this.kepUrl = dog.kepUrl || null;
  }
   get Id() {
    return this.id;
  }
  set Id(id: number | null) {
    this.id = id;
  }
}