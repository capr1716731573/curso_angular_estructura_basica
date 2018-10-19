import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-angular',
  templateUrl: './pipes-angular.component.html',
  styles: []
})
export class PipesAngularComponent implements OnInit {
  hoy=new Date();
  ciudad:string='Santo DOMINGO';
  resultado:number=18.5*56.3/9;
  persona:any={
    "sexo":"mujer",
    "nombre":"Vanessa"
  }

  encabezamientoPipei18n:any={
    "hombre":"Estimado",
    "mujer":"Estimada"
  }
  constructor() { }

  ngOnInit() {
  }

}
