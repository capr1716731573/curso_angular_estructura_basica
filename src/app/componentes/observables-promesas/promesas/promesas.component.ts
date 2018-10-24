import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {
  elementosPromesa:any[]=[];
  constructor() { 
    //llamo al observable
    this.contar()
    .then()
    .catch( error => console.log('Error de Promise', error));
  }

  ngOnInit() {
  }

  //FUNCION QUE RETORNA UNA PROMESA
  contar(): Promise<boolean>{
    return new Promise( (resolve, reject) => {
      let contador = 0;
      let intervalo = setInterval( () => {
        contador +=1;
        console.log(contador);
        this.elementosPromesa.push(contador);
        if( contador == 100 ){
          resolve(true);
          //reject(' simplemente error);
          clearInterval(intervalo);
        }
        
       } ,1000);
    });
  }

}
