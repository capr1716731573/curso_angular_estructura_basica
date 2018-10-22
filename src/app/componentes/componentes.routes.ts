import { Routes, RouterModule } from '@angular/router';
import { InterpolacionComponent } from './data-binding/interpolacion/interpolacion.component';
import { PropertyBindingComponent } from './data-binding/property-binding/property-binding.component';
import { EventBindingComponent } from './data-binding/event-binding/event-binding.component';
import { TwowayBindingComponent } from './data-binding/twoway-binding/twoway-binding.component';
import { NgifEsleComponent } from './directivas/ngif-esle/ngif-esle.component';
import { NgClassStyleComponent } from './directivas/ng-class-style/ng-class-style.component';
import { NgForComponent } from './directivas/ng-for/ng-for.component';
import { NgSwitchComponent } from './directivas/ng-switch/ng-switch.component';
import { DirectivaPersonalizadaComponent } from './directivas/directiva-personalizada/directiva-personalizada.component';
import { PadreComponent } from './directivas/input-output/padre/padre.component';
import { PipesAngularComponent } from './pipes/pipes-angular/pipes-angular.component';
import { PipesPersonalizadoComponent } from './pipes/pipes-personalizado/pipes-personalizado.component';
import { PersonasComponent } from './servicios/personas.component';

const pages_routes: Routes = [
    //DataBindings
    { path: 'interpolacion', component: InterpolacionComponent },
    { path: 'propertybinding', component: PropertyBindingComponent },
    { path: 'eventbinding', component: EventBindingComponent },
    { path: 'twowaybinding', component: TwowayBindingComponent },

    //Directivas
    { path: 'ngif-else', component: NgifEsleComponent },
    { path: 'ngstyle-class', component: NgClassStyleComponent },
    { path: 'ngfor', component: NgForComponent },
    { path: 'ngswitch', component: NgSwitchComponent },
    { path: 'directiva-personal', component: DirectivaPersonalizadaComponent },
    { path: 'padre', component: PadreComponent },

     //Pipes
    { path: 'pipes_angular', component: PipesAngularComponent },
    { path: 'pipes_personalizado', component: PipesPersonalizadoComponent },

    //Services
    { path: 'servicios', component: PersonasComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'interpolacion' }
];

export const PAGINA_CONTENEDOR_ROUTES = RouterModule.forChild(pages_routes);
