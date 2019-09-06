import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatMenuModule, MatIconModule, BrowserAnimationsModule, NoopAnimationsModule
  ],
  exports: [
    MatMenuModule, MatIconModule, BrowserAnimationsModule, NoopAnimationsModule
  ]
})
export class AngularMaterialModule { }
