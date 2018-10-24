import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Proveedor } from '../../../models/Proveedor';
import { ProvinciasService } from 'src/app/servicios/provincias.service';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styles: []
})
export class TemplateDrivenComponent implements OnInit {
  /*Se utiliza estos CSS*/
  /*
  input.ng-invalid.ng-touched {
    border-left: 5px solid #a94442;
}

input.ng-valid.ng-dirty {
    border-left: 5px solid #42A948;
}

select.ng-invalid.ng-touched {
    border-left: 5px solid #a94442;
}

select.ng-valid.ng-dirty {
    border-left: 5px solid #42A948;
}

.check {
    color: #42A948;
}

.uncheck {
    color: #a94442;
}
  */

  @ViewChild('formpro') formpro: NgForm;
  proveedor: Proveedor;
  provincias:any[]=[];

  constructor( public _provinciasService:ProvinciasService) { 
    //Inicializar provincias
    this.provincias=this._provinciasService.getProvincias();
    //Inicializamos Proveedor
    this.proveedor=new Proveedor('','','','','','','','','');

  }

  ngOnInit() {
  }

  onSubmit(){
    //Imprimo los estados del formulario
    console.log(this.formpro);

    this.proveedor.nombre = this.formpro.value.nombre;
    this.proveedor.cif = this.formpro.value.cif;
    this.proveedor.direccion = this.formpro.value.direccion;
    this.proveedor.cp = this.formpro.value.cp;
    this.proveedor.localidad = this.formpro.value.localidad;
    this.proveedor.provincia = this.formpro.value.provincia;
    this.proveedor.telefono = this.formpro.value.telefono;
    this.proveedor.email = this.formpro.value.email;
    this.proveedor.contacto = this.formpro.value.contacto;
    
    //reset form
    this.formpro.reset();
  }

}
