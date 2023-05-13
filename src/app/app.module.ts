import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//components
import { AppComponent } from './app.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
  ],
  declarations: [
    AppComponent,
    HeroFormComponent,

  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
