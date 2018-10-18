import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMenuItem]'
})
export class MenuItemDirective {

  //Ver style.css

 @HostBinding('class.itemOrange') private mostrar:boolean=false;
 @HostListener('mouseover') onOver(){
  this.mostrar=true;
 }

 @HostListener('mouseout') onOut(){
  this.mostrar=false;
 }

}
