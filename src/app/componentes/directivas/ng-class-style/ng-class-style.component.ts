import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-style',
  templateUrl: './ng-class-style.component.html',
  styles: []
})
export class NgClassStyleComponent implements OnInit {
  calificacion:number;
  calificacion1:number;
  constructor() { }

  ngOnInit() {
  }

  setColor(){
    return this.calificacion >=8 ? 'green' : 'red';
  }

}
