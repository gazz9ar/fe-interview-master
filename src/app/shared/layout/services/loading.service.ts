import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loadingSubject:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public loading$:Observable<boolean> = this.loadingSubject.asObservable();

  constructor() { }

  startLoading(): void {
    this.loadingSubject.next(true);
  }

  // just to mimic real http req
  finishLoading(): void {
    setTimeout(() => {
      this.loadingSubject.next(false);
    }, 500);    
  }
}
