import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PrimeiroTextoComponent } from './componentes/primeiro-texto/primeiro-texto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrimeiroTextoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
