import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {map} from 'rxjs/operators';
import {AppComponent} from './app.component';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getHeros(){
    return this.httpClient.get<Hero[]>('https://localhost:8080/hero').pipe(
      map((res => res)));
}

}
