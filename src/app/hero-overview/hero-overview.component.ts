import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service';
import {Hero} from '../hero';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-hero-overview',
  templateUrl: './hero-overview.component.html',
  styleUrls: ['./hero-overview.component.css']
})
export class HeroOverviewComponent implements OnInit {
  heros: Hero[];
  errorMessage;


  constructor(
    private heroService: HeroService,
    private appComponent: AppComponent
              )

  {
    this.heroService.getHeros(
      this.appComponent,
      (heroCallback) => {
        this.heros = heroCallback.content;
        console.log('heros: ', this.heros );
      }
    )
  }

  ngOnInit(): void {
  }

}
