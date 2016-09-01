import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';

import { InMemoryDataService }  from '../data/in-memory-data.service';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';
import {HeroesComponent} from '../heroes-list/heroes.component'
import { HeroService } from '../services/hero.service';
import { AppComponent }  from './app.component';
import { routing } from './app.routing';
import { DashboardComponent } from '../dashboard/dashboard.component'


@NgModule({
  imports: [ 
  	BrowserModule, 
  	FormsModule, 
  	routing,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [ 
  	AppComponent, 
  	HeroDetailComponent, 
  	HeroesComponent,
  	DashboardComponent
  ],
  providers: [HeroService],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }