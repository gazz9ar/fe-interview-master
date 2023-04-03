import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgeService {

  constructor() { }

  saveDeclaredAge(legalOfAge:boolean): void {
    legalOfAge ? localStorage.setItem('over18','yes') : localStorage.setItem('over18','no');    
  }

  isOver18(): boolean | string {
    const declaredAgeFromLocalStorage = localStorage.getItem('over18');
    if(declaredAgeFromLocalStorage){      
      if(declaredAgeFromLocalStorage === 'yes'){
        return true
      } else {
        return false;
      }
    }
    return 'notDeclared';
  }
}
