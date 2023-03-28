import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { MaterialModule } from 'src/app/material/material.module';
import { RouterModule } from '@angular/router';
import { GeneralLayoutComponent } from './component/general/general.component';

let COMPONENTS:any[] = [
  ToolbarComponent,
  SidenavComponent,
  GeneralLayoutComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS,  
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class LayoutModule { }
