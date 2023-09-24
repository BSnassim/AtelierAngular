import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {
  
  f = {idFournisseur: 105, code: 'A104B89', libelle:'MyTeck'};
  hide = false;

  constructor() { }

  ngOnInit(): void {
  }

  hideInfo(){
    this.hide = !this.hide;
    console.log(this.hide);
  }

}
