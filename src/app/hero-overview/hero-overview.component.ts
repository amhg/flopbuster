import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-overview',
  templateUrl: './hero-overview.component.html',
  styleUrls: ['./hero-overview.component.css']
})
export class HeroOverviewComponent implements OnInit {
  heros: Hero[];
  errorMessage;


  constructor(private heroService: HeroService) {
    this.heroService.getHeros()
      .subscribe(
        (response) => {
          console.log('response received: ' + response);
          this.heros = response;
        },
        (error)  => {
          console.error('Request failed with error');
          this.errorMessage = error;
        },
      );
  }

  ngOnInit(): void {
  }

}
