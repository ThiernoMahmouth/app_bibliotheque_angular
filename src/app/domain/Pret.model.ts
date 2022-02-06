import { Livre } from './Livre.model';

export class Pret
{
    constructor(
        public id:number, public nom:string, public prenom:string, public carte:string,
        public telephone:string, public date:Date, public titre:string)
    {
        
    }
}