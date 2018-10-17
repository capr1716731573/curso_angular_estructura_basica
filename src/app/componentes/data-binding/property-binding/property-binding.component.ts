import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styles: []
})
export class PropertyBindingComponent implements OnInit {
  texto:string='Este texto va a cambiar'
  constructor() { 
    setTimeout(()=>{
      if(this.texto==='Este texto va a cambiar'){
        this.texto='Ya cambio !!!';
      }else{
        this.texto='Este texto va a cambiar'
      }
      
    },5000)
  }

  ngOnInit() {

  }

    

}
