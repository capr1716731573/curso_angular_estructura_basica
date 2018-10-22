import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/servicios/personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styles: []
})
export class PersonasComponent implements OnInit {
  listaPersonas:any []=[];
  constructor( public _personasService:PersonasService) { }

  ngOnInit() {
    this.listaPersonas=this._personasService.getPersonas();
  }

}
