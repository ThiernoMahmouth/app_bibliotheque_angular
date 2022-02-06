import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Livre } from 'src/app/domain/Livre.model';
import { LivresService } from '../livres.service';

@Component({
  selector: 'app-livres-ajouter',
  templateUrl: './livres-ajouter.component.html',
  styleUrls: ['./livres-ajouter.component.css']
})
export class LivresAjouterComponent implements OnInit {

  //addLivreForm: FormGroup 
  addLivreForm = this.formBuilder
        .group(
          {
            titre: ['', [Validators.required]],
            auteur:  ['', [Validators.required]],
            categorie:  ['', [Validators.required]],
            langue: ['', [Validators.required]],
            nbre: [0, [Validators.required]],
            description: '',
            photo: ''
          }
        )

  constructor(private formBuilder:FormBuilder, private livresService: LivresService, private router:Router) { }

  ngOnInit() 
  {
  }
  
  onEnregistrer()
  {
    //Recuperation des valeurs du formulaire
    /*
  const titre= this.addLivreForm.get('titre').value;
  const auteur= this.addLivreForm.get('auteur').value;
  const categorie= this.addLivreForm.get('categorie').value;
  const langue= this.addLivreForm.get('langue').value;
  const nbre= this.addLivreForm.get('nbre').value;
    
    //Creation d'un livre avec les valeurs fournies dans le formulaire
    const newLivre= new Livre(titre,auteur,categorie,langue,nbre);
    //Ajout du livre créé dans la base de données
    this.livresService.ajouterLivre(newLivre);
    */
    //Redirection
    this.router.navigate(['/livres'])

  }
}

