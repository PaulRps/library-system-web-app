import { NgModule } from '@angular/core';
import { MaterialModulesTs } from './material.modules';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [MaterialModulesTs],
  exports: [MenuComponent]
})
export class ComponentsModule { }
