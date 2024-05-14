import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModulesTs } from './components/material.modules';
import { ComponentsModule } from './components/components.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModulesTs
  ],
  exports: [MaterialModulesTs,ComponentsModule]
})
export class CoreModulesTs { }
