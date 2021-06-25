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

  public getHeros(app: AppComponent, callback: (heroCallback) => any){
    console.log('Call to BE')
    this.httpClient.get<Hero[]>('http://localhost:8080/hero')
      .toPromise()
      .then(heroCallback => callback(heroCallback))
      .catch(error => app.handleHttpError(error));
}

}
