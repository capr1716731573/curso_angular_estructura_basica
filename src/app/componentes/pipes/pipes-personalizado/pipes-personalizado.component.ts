import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-personalizado',
  templateUrl: './pipes-personalizado.component.html',
  styles: []
})
export class PipesPersonalizadoComponent implements OnInit {
  valor:number=0;
  constructor() { }

  ngOnInit() {
  }

}
