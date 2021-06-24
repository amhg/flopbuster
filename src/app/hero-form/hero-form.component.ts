import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  constructor() { }

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  //model: any = {};

/*  const myHero =  new Hero(42, 'SkyDog',
    'Fetch any object at any distance',
    'Leslie Rollover');*/

  submitted = false;
  // tslint:disable-next-line:typedef
  onSubmit(){
    this.submitted = true;
  }
  // tslint:disable-next-line:typedef
  newHero() {
    this.model = new Hero(42, '', '');
  }

  ngOnInit(): void {
  }

}
