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

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    InterpolacionComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent
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
