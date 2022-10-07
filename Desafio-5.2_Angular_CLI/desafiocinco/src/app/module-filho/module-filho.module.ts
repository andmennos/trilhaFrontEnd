import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ComponentTesteModuleComponent } from './component-teste-module/component-teste-module.component';
import { ComponentTesteModule2Component } from './component-teste-module2/component-teste-module2.component';

export const routes: Routes = [
  {path: "component-teste-module", component: ComponentTesteModuleComponent},
  {path: "component-teste-module2", component: ComponentTesteModule2Component}
]

@NgModule({
  declarations: [ComponentTesteModuleComponent, ComponentTesteModule2Component],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ModuleFilhoModule { }
