import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { MaterialModule } from 'src/app/material/material.module';

let COMPONENTS:any[] = [
  ToolbarComponent,
  SidenavComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS,    
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class LayoutModule { }
