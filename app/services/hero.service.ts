import { Injectable } from '@angular/core';
import {Hero} from '../data/hero'
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class HeroService {

	private heroesUrl = 'app/heroes';  // URL to web api
	private headers = new Headers({'Content-Type': 'application/json'});


	constructor(private http: Http) { }

	getHeroes(): Promise<Hero[]> {

		// return Promise.resolve(HEROES);
		return this.http.get(this.heroesUrl)
				.toPromise()
				.then(response => response.json().data as Hero[])
				.catch(this.handleError)

	}

	getHeroesSlowly(): Promise<Hero[]> {
	  return new Promise<Hero[]>(resolve =>
	    setTimeout(resolve, 2000))
	    .then(() => this.getHeroes());
	}

	getHero(id: number): Promise<Hero> {
	  return this.getHeroes()
	             .then(heroes => heroes.find(hero => hero.id === id));
	}

	private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
	  return Promise.reject(error.message || error);
	}

	update(hero: Hero): Promise<Hero> {
	  const url = `${this.heroesUrl}/${hero.id}`;
	  return this.http
	    .put(url, JSON.stringify(hero), {headers: this.headers})
	    .toPromise()
	    .then(() => hero)
	    .catch(this.handleError);
	}

	delete(id: number): Promise<void> {
	  let url = `${this.heroesUrl}/${id}`;
	  return this.http.delete(url, {headers: this.headers})
	    .toPromise()
	    .then(() => null)
	    .catch(this.handleError);
	}

	create(name: string): Promise<Hero> {
 
		let hero: Hero = {id: Math.floor(Math.random()*1000), name: name};

		return this.http.post(this.heroesUrl, hero)
			.toPromise()
			.then(() => hero)
			.catch(this.handleError);

	}




}
