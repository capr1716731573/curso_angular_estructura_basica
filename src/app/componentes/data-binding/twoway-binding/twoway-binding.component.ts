import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-binding',
  templateUrl: './twoway-binding.component.html',
  styles: []
})
export class TwowayBindingComponent implements OnInit {
  texto:string='Texto Original';
  constructor() { }

  ngOnInit() {
  }

}
