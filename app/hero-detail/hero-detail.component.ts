import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


import {Hero} from '../data/hero';
import { HeroService } from '../services/hero.service';


@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail/hero-detail.component.html',
  styleUrls: ['app/hero-detail/hero-detail.component.css']
})


export class HeroDetailComponent implements OnInit {

	ngOnInit(): void {
	  this.route.params.forEach((params: Params) => {
	    let id = +params['id'];
	    this.heroService.getHero(id)
	      .then(hero => this.hero = hero);
	  });
	}

	constructor(
	  private heroService: HeroService,
	  private route: ActivatedRoute) {
	}

	goBack(): void {
	  window.history.back();
	}

	save(): void {
	  this.heroService.update(this.hero)
	    .then(this.goBack);
	}

	@Input()
	hero: Hero;
}
