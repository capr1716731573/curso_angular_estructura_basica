import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styles: []
})
export class ReactiveComponent implements OnInit {

  presupuestoForm: FormGroup;
  presupuesto: any;
  base: any;
  tipo: any;
  iva: any = 0;
  total: any = 0;


  constructor(private pf: FormBuilder) {

  }

  ngOnInit() {
    
    //enlazo el formgroup a un formbuilder para conectar 
    //el formulario y sus controles html 
    // en el fomulario añadir la etiqueta [formGroup]="presupuestoForm"
    //y en los controles añadir formControlName="proveedor"
    this.presupuestoForm = this.pf.group({
      proveedor: ['', Validators.required ],
      fecha: ['', Validators.required ],
      concepto: ['', [ Validators.required, Validators.minLength(10)] ],
      base: ['', Validators.required ],
      tipo: ['', Validators.required ],
      iva: this.iva ,
      total: this.total
    });

    this.onChanges();

  }

  onChanges(): void {
    //Aqui nos subscribimos mediante "this.presupuestoForm.valueChanges.subscribe" a los cambios del formulario
    // es por eso que todo lo que esta dentro de la funcion se ejecuta cuando el form realiza cambios
    //es decir es un observable de los cambios del formulario que ejecuta una funcion cuando se alteren los datos
      this.presupuestoForm.valueChanges.subscribe(valor => {
        this.base = valor.base;
        this.tipo = valor.tipo;
        this.presupuestoForm.value.iva = this.base * this.tipo;
        this.presupuestoForm.value.total = this.base + (this.base * this.tipo);
      });
  }

  onSubmit() {
    this.presupuesto = this.savePresupuesto();
    alert(JSON.stringify(this.presupuesto));
  }

  savePresupuesto() {

    const savePresupuesto = {

      proveedor: this.presupuestoForm.get('proveedor').value,
      fecha: this.presupuestoForm.get('fecha').value,
      concepto: this.presupuestoForm.get('concepto').value,
      base: this.presupuestoForm.get('base').value,
      tipo: this.presupuestoForm.get('tipo').value,
      iva: this.presupuestoForm.get('iva').value,
      total: this.presupuestoForm.get('total').value

    };
    return savePresupuesto;
  }
}
