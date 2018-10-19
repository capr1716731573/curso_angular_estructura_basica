import { Routes, RouterModule } from '@angular/router';
import { InterpolacionComponent } from './componentes/data-binding/interpolacion/interpolacion.component';
import { PropertyBindingComponent } from './componentes/data-binding/property-binding/property-binding.component';
import { EventBindingComponent } from './componentes/data-binding/event-binding/event-binding.component';
import { TwowayBindingComponent } from './componentes/data-binding/twoway-binding/twoway-binding.component';
import { NgifEsleComponent } from './componentes/directivas/ngif-esle/ngif-esle.component';
import { NgClassStyleComponent } from './componentes/directivas/ng-class-style/ng-class-style.component';
import { NgForComponent } from './componentes/directivas/ng-for/ng-for.component';
import { NgSwitchComponent } from './componentes/directivas/ng-switch/ng-switch.component';
import { DirectivaPersonalizadaComponent } from './componentes/directivas/directiva-personalizada/directiva-personalizada.component';
import { PadreComponent } from './componentes/directivas/input-output/padre/padre.component';
import { PipesAngularComponent } from './componentes/pipes/pipes-angular/pipes-angular.component';
import { PipesPersonalizadoComponent } from './componentes/pipes/pipes-personalizado/pipes-personalizado.component';


const APP_ROUTES: Routes = [
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

    { path: '**', pathMatch: 'full', redirectTo: 'interpolacion' }

   

];


export const App_Routing = RouterModule.forRoot(APP_ROUTES,{useHash:true});
