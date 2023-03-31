import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';

import { catchError} from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {    
    return next.handle(req)
    .pipe(   
      catchError(error => {        
        if ( error.status == 401) {    
          this._snackBar.open(`Error ${error.status}: ${error.message}`, 'Close');   
          this.router.navigate(['home'])
        }
        return throwError(error.message);
      })
    );
  }
}
