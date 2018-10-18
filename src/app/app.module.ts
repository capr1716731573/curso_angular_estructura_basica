import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { InterpolacionComponent } from './componentes/data-binding/interpolacion/interpolacion.component';
import { App_Routing } from './app.routes';
import { PropertyBindingComponent } from './componentes/data-binding/property-binding/property-binding.component';
import { EventBindingComponent } from './componentes/data-binding/event-binding/event-binding.component';
import { TwowayBindingComponent } from './componentes/data-binding/twoway-binding/twoway-binding.component';
import { NgifEsleComponent } from './componentes/directivas/ngif-esle/ngif-esle.component';
import { NgClassStyleComponent } from './componentes/directivas/ng-class-style/ng-class-style.component';
import { NgForComponent } from './componentes/directivas/ng-for/ng-for.component';
import { NgSwitchComponent } from './componentes/directivas/ng-switch/ng-switch.component';

//Directivas
import { MenuItemDirective } from './directivas/menu-item.directive';
import { DirectivaPersonalizadaComponent } from './componentes/directivas/directiva-personalizada/directiva-personalizada.component';
import { HijoComponent } from './componentes/directivas/input-output/hijo/hijo.component';
import { PadreComponent } from './componentes/directivas/input-output/padre/padre.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
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
    PadreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    App_Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
