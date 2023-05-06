import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from '@modules/material-design.module';
import { RecordComponent } from '@pages/record/record.component';
import { HomeComponent } from '@pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PipesModule } from '@modules/pipes.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    PipesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
