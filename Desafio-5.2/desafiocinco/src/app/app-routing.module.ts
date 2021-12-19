import { ComponenteFilhoComponent } from './components/componente-filho/componente-filho.component';
import { TestesPipeComponent } from './components/testes-pipe/testes-pipe.component';
import { CuboComponent } from './components/cubo/cubo.component';
import { QuadradoComponent } from './components/quadrado/quadrado.component';
import { ListaNumerosComponent } from './components/lista-numeros/lista-numeros.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: "comp-filho", component: ComponenteFilhoComponent},
  {path: "lista", component: ListaNumerosComponent},
  {path: "quadrado", component: QuadradoComponent},
  {path: "cubo", component: CuboComponent},
  {path: "testes-pipe", component: TestesPipeComponent},
  {path: "lazyloading", loadChildren: ()=> import('./module-filho/module-filho.module').then(m => m.ModuleFilhoModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
