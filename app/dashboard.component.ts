import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import {Hero} from './hero'
import { Router } from '@angular/router';


@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})

export class DashboardComponent implements OnInit { 

	ngOnInit(): void {

   		this.heroService.getHeroes().then(heroes =>
   			this.heroes = heroes.slice(1,5)
   		);

  	}

	 constructor(
	 		private router: Router,
	 		private heroService: HeroService
	 		) { }

	 heroes: Hero[] = [];

	 gotoDetail(hero: Hero): void {

	 	let link = ['/detail', hero.id]
	 	this.router.navigate(link)
	 }

}