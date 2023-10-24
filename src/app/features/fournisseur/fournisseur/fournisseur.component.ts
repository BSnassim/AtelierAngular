import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent {
  
  id = '';
  constructor(private activated: ActivatedRoute,private router:Router) {
    //avec snapshot
    console.log(this.activated.snapshot.params['id']);
    //avec la propriete params
    this.activated.params.subscribe((param) => {
      console.log(param['id']);
      this.id = param['id'];

    });
    //avec la propriete paramMap
    this.activated.paramMap.subscribe((param) => {
      console.log(param.get('id'));
    })

    this.activated.queryParamMap.subscribe((param) => {
      console.log(param.get('code'));
    });
  }
  idFournisseur = 105;
  code = 'A104B89';
  libelle = 'MyTeck';
  hide = false;
  changehide() {
    this.hide = !this.hide;
  }
  toHome() {
    this.router.navigate(['home']);
  }
}