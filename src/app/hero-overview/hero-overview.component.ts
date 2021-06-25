import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service';
import {Hero} from '../hero';
import {AppComponent} from '../app.component';
import { HerosListService } from './heros-list.service';
import { report } from 'process';
import { noop, Observable, of } from 'rxjs';
import { catchError, filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-overview',
  templateUrl: './hero-overview.component.html',
  styleUrls: ['./hero-overview.component.css']
})
export class HeroOverviewComponent implements OnInit {
 
  heros: Hero[];
  errorMessage;
  errors:any;
  public herosObservable$:Observable<Hero[]>= new Observable<Hero[]>();

  constructor(
    private heroService: HeroService,
    private appComponent: AppComponent,
    private hersoListService:HerosListService,
    private app: AppComponent
              )

  {
    // this.heroService.getHeros(
    //   this.appComponent,
    //   (heroCallback) => {
    //     this.heros = heroCallback.content;
    //     console.log('heros: ', this.heros );
    //   }
    // )
  }

  ngOnInit(): void {

    this.herosObservable$=this.hersoListService.getHeros(this.app)
    

  }

}
