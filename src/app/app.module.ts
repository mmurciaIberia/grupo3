import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListModuleModule } from './list-module/list-module.module';
import { DetailModuleModule } from './detail-module/detail-module.module';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/controllers/header.component';
import { FormsModule } from '@angular/forms';

//import { GoogleMapsModule } from '@angular/google-maps';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListModuleModule,
    DetailModuleModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
