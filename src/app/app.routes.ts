import { Routes, RouterModule } from '@angular/router';
import { InterpolacionComponent } from './componentes/data-binding/interpolacion/interpolacion.component';
import { PropertyBindingComponent } from './componentes/data-binding/property-binding/property-binding.component';
import { EventBindingComponent } from './componentes/data-binding/event-binding/event-binding.component';
import { TwowayBindingComponent } from './componentes/data-binding/twoway-binding/twoway-binding.component';


const APP_ROUTES: Routes = [
    { path: 'interpolacion', component: InterpolacionComponent },
    { path: 'propertybinding', component: PropertyBindingComponent },
    { path: 'eventbinding', component: EventBindingComponent },
    { path: 'twowaybinding', component: TwowayBindingComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'interpolacion' }
];


export const App_Routing = RouterModule.forRoot(APP_ROUTES,{useHash:true});
