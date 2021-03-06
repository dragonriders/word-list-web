import { NgModule } from '@angular/core';
import {
  MatProgressSpinnerModule,
  MatIconModule,
  MatProgressBarModule,
  MatTooltipModule
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
    MatProgressBarModule,
    MatTooltipModule
  ]
})
export class MaterialModule { }
