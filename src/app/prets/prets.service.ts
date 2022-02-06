import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pret } from '../domain/Pret.model';

@Injectable({
  providedIn: 'root'
})
export class PretsService 
{
  private url: string = "";

  constructor(private httpClient:HttpClient) { }

  getPrets()
  {
    return this.httpClient.get<Pret[]>(this.url)  
  }
  ajouterPret(pret: Pret)
  {
    return this.httpClient.post(this.url, pret)
  }

  supprimerPret(pret: Pret)
  {
    return this.httpClient.delete(this.url+ "/" + pret.id)
  }
  modifierPret(pret: Pret)
  {
    return this.httpClient.put<Pret>(this.url+ "/" + pret.id, Pret)
  }
  getPretById(id:number)
  {
    return this.httpClient.get<Pret>(this.url+ "/" + id)
  }
}
