import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-esle',
  templateUrl: './ngif-esle.component.html',
  styles: []
})
export class NgifEsleComponent implements OnInit {
  nombres:string='';
  capital:string='';
  constructor() { }

  ngOnInit() {
  }

  setResultado(){
    return  this.capital.toUpperCase() === 'MADRID' ? true : false;
  }


}
