import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModulesTs } from './components/material.modules';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModulesTs
  ],
  exports: [MaterialModulesTs]
})
export class CoreModulesTs { }
