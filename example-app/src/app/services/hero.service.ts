import { Injectable } from '@angular/core';
import { Hero } from '../heroes/models/hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroes: Hero[] = [
    { id: 11, name: 'Leo Ponzio' },
    { id: 12, name: 'Jony Maidana' },
    { id: 13, name: 'Milton Casco' },
    { id: 14, name: 'Nacho Fernandez' },
    { id: 15, name: 'Juanfer Quintero' },
    { id: 16, name: 'Rodrigo Mora' },
    { id: 17, name: 'Enzo Perez' }    
  ];
  
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(this.heroes);
  }

  getHero(id: number): Observable<Hero> {
    return of(this.heroes.find( hero => hero.id === id ));
    
  }

}
