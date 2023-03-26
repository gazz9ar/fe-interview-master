import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';

import { catchError, delay, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { Observable, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(
    private loadingService:LoadingService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {    
    this.loadingService.startLoading();
    return next.handle(req)
    .pipe(
      finalize(() => {
        setTimeout(() => {
          this.loadingService.finishLoading();
        }, 500);       
      }),
      catchError(error => {
        //console.error("Request error:", error.status);
        if ( error.status == 401) {    
          this._snackBar.open(`Error ${error.status}: ${error.message}`, 'Close');   
          this.router.navigate(['home'])
        }
        return throwError(error.message);
      })
    );
  }
}
