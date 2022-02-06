import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Livre } from '../domain/Livre.model';
import { LivresModule } from './livres.module';

@Injectable({
  providedIn: LivresModule
})
export class LivresService 
{
  private url: string = "";

  constructor(private httpClient:HttpClient) { }

  getLivres()
  {
    return this.httpClient.get<Livre[]>(this.url)  
  }
  ajouterLivre(livre: Livre)
  {
    return this.httpClient.post(this.url, livre)
  }

  supprimerLivre(livre: Livre)
  {
    return this.httpClient.delete(this.url+ "/" + livre.id)
  }
  modifierLivre(livre: Livre)
  {
    return this.httpClient.put<Livre>(this.url+ "/" + livre.id, livre)
  }
  getLivreById(id:number)
  {
    return this.httpClient.get<Livre>(this.url+ "/" + id)
  }
}
