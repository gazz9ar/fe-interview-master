import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-required-age',
  templateUrl: './required-age.component.html',
  styleUrls: ['./required-age.component.scss']
})
export class RequiredAgeComponent implements OnInit {

  
  constructor( public dialogRef: MatDialogRef<RequiredAgeComponent>,) { }

  ngOnInit(): void {
  }

  answer(legalOfAge:boolean): void {
    this.dialogRef.close(legalOfAge);
  }

}
