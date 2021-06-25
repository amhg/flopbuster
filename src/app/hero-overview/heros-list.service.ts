import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppComponent } from '../app.component';
import { Hero } from '../hero';

@Injectable({
  providedIn: 'root'
})
export class HerosListService {

  constructor(private http:HttpClient) {}

   public getHeros(app:AppComponent){

    return  this.http.get<Hero[]>("http://localhost:8080/hero").pipe(
      map(response=> response),
      catchError(error=> {
        app.handleHttpError(error)
        return of([]);
      })
    );
      
  }
}
