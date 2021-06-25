import { Component } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';

class ErrorType {
  type: string;
  details: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flopbuster';

  httpStatus: number;
  httpMessage: string;
  errorType: ErrorType;


  public handleHttpError(response: HttpErrorResponse) {
    if (response.status) {
      console.warn('HTTP error: ' + response.status);
      this.httpStatus = response.status;
      this.httpMessage = response.message;
      if (response.status === 422) {
        this.errorType = response.error;
        console.warn('Received validation error: ' + JSON.stringify(this.errorType));
      }else {
        console.log("something else");
        console.warn('Received validation error: ' + JSON.stringify(this.errorType));
      }
    }
  }
}




