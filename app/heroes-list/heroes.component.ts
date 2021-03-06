import { Component, OnInit} from '@angular/core';
import {Hero} from '../data/hero'
import { HeroService } from '../services/hero.service';
import { Router } from '@angular/router';


@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes-list/heroes.component.html', 
  styleUrls: ['app/heroes-list/heroes.component.css']

})


export class HeroesComponent implements OnInit {

  ngOnInit(): void {

    this.getHeroes();

  }

  constructor(private heroService: HeroService, private router: Router) {

  }	

  selectedHero: Hero;

  heroes: Hero[];

  onSelect(hero: Hero): void {

    this.selectedHero = hero;

  }

  getHeroes(): void {

    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail(){
    let link = ['/detail', this.selectedHero.id]
     this.router.navigate(link)
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }
  
  delete(hero: Hero): void {
    this.heroService
        .delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }



}