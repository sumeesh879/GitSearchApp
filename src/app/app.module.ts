import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'

import { AppComponent }  from './app.component';
import { GithubComponent } from './components/github.component';
import { route } from './app.routes';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, route ],
  declarations: [ AppComponent, GithubComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
