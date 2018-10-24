import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';//formularios tecnica template
import { ReactiveFormsModule } from '@angular/forms'; //formularios tecnica reactive
import { CommonModule } from '@angular/common';


//rutas
import { PAGINA_CONTENEDOR_ROUTES } from './componentes.routes';

//componentes
import { PersonasComponent } from './servicios/personas.component';
import { InterpolacionComponent } from './data-binding/interpolacion/interpolacion.component';
import { PropertyBindingComponent } from './data-binding/property-binding/property-binding.component';
import { EventBindingComponent } from './data-binding/event-binding/event-binding.component';
import { TwowayBindingComponent } from './data-binding/twoway-binding/twoway-binding.component';
import { NgifEsleComponent } from './directivas/ngif-esle/ngif-esle.component';
import { NgClassStyleComponent } from './directivas/ng-class-style/ng-class-style.component';
import { NgForComponent } from './directivas/ng-for/ng-for.component';
import { NgSwitchComponent } from './directivas/ng-switch/ng-switch.component';
import { MenuItemDirective } from '../directivas/menu-item.directive';
import { DirectivaPersonalizadaComponent } from './directivas/directiva-personalizada/directiva-personalizada.component';
import { HijoComponent } from './directivas/input-output/hijo/hijo.component';
import { PadreComponent } from './directivas/input-output/padre/padre.component';
import { PipesAngularComponent } from './pipes/pipes-angular/pipes-angular.component';
import { ConvertidorPipe } from '../pipes/convertidor.pipe';
import { PipesPersonalizadoComponent } from './pipes/pipes-personalizado/pipes-personalizado.component';
import { PersonasService } from '../servicios/personas.service';
import { TemplateDrivenComponent } from './formularios/template-driven/template-driven.component';
import { ReactiveComponent } from './formularios/reactive/reactive.component';
import { ObservablesComponent } from './observables-promesas/observables/observables.component';
import { PromesasComponent } from './observables-promesas/promesas/promesas.component';

@NgModule({
  imports: [
    CommonModule,
    PAGINA_CONTENEDOR_ROUTES,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    InterpolacionComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent,
    NgifEsleComponent,
    NgClassStyleComponent,
    NgForComponent,
    NgSwitchComponent,
    MenuItemDirective,
    DirectivaPersonalizadaComponent,
    HijoComponent,
    PadreComponent,
    PipesAngularComponent,
    ConvertidorPipe,
    PipesPersonalizadoComponent,
    PersonasComponent,
    TemplateDrivenComponent,
    ReactiveComponent,
    ObservablesComponent,
    PromesasComponent
  ],
  providers:[
    PersonasService
  ]
})
export class ComponentesModule { }
