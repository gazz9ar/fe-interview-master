import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RequiredAgeComponent } from '../required-age/required-age.component';
import { AgeService } from 'src/app/pages/services/age.service';
import { Router } from '@angular/router';

@Component({
  selector: 'general-layout',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralLayoutComponent implements OnInit {

  legalOfAge:boolean = true;

  constructor(
    private dialog:MatDialog,
    private _cdRef: ChangeDetectorRef,
    private ageService:AgeService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.checkAge();
  }

  checkAge(): void {
    if(this.ageService.isOver18() === 'notDeclared' || !this.ageService.isOver18()){
      if(!this.ageService.isOver18()){
        this.legalOfAge = false;
      } else {
        this.openAgeDialog(); 
      }           
    } else {
      this.router.navigate(['/home']);
    } 
  }

  openAgeDialog(): void {
    const dialogRef = this.dialog.open(RequiredAgeComponent)

    dialogRef.afterClosed().subscribe(result => {
      this.legalOfAge = result;    
      this.ageService.saveDeclaredAge(this.legalOfAge);      
      this.router.navigate(['home'])
    });
  }

}
