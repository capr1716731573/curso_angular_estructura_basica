import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styles: []
})
export class EventBindingComponent implements OnInit {
  texto:string='Texto Inicial'
  constructor() { }

  ngOnInit() {
  }

  cambiarTexto(){
    if(this.texto==='Texto Inicial'){
      this.texto='Ya se cambio texto !!!';
    }else{
      this.texto='Texto Inicial'
    }
    
  }

}
