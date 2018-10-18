import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styles: []
})
export class PadreComponent implements OnInit {
  avisos: string[] = ['Aviso 1' , 'Aviso 2' , 'Aviso 3'];
  texto: string;

  mostrarMensaje(event) {
    this.texto = event + ' marcado como leido';
  }

  constructor() { }

  ngOnInit() {
  }

}
