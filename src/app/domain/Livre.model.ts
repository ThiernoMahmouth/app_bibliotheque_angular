export class Livre 
{
    public photo: string | undefined;
    public description:string | undefined;
    
    constructor(public titre: string,public auteur:string, public categorie:string,
        public langue:string, public nbre:number, public id?:number){}
}