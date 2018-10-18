import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {
  @Input() aviso: string;
  @Output() mensajeMarcado = new EventEmitter();

  leido: boolean = false;
  mensaje: string;

  marcar(event) {
    this.leido = !this.leido;
  }

  detectar(event) {
        this.mensaje = this.aviso;
        this.mensajeMarcado.emit(this.mensaje);
  }
  constructor() { }

  ngOnInit() {
  } 

}
