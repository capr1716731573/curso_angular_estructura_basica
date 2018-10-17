import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../../models/Alumno';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styles: []
})
export class InterpolacionComponent implements OnInit {

  alumno:Alumno;

  constructor() { 
    this.alumno=new Alumno(1,'Carlos Alberto','Pullas Recalde','Santo Domingo');
  }

  ngOnInit() {
  }

  getDescripcion(alumno:Alumno){
    return `La descripcion del alumno ${alumno.nombres} ${alumno.apellidos} es de un joven profesional responsable y amante de su carrera`
  }

}
