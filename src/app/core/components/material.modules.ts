import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [MatSlideToggleModule, MatTabsModule]
})
export class MaterialModulesTs { }
