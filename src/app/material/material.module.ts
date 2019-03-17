import { NgModule } from '@angular/core';
import {
  MatProgressSpinnerModule,
  MatIconModule,
  MatProgressBarModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatProgressSpinnerModule,
    MatIconModule,
    MatProgressBarModule
  ],
  exports: [
    MatProgressSpinnerModule,
    MatIconModule,
    MatProgressBarModule
  ]
})
export class MaterialModule { }
