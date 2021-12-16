import { CuboComponent } from './components/cubo/cubo.component';
import { QuadradoComponent } from './components/quadrado/quadrado.component';
import { ListaNumerosComponent } from './components/lista-numeros/lista-numeros.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: "lista", component:ListaNumerosComponent},
  {path: "quadrado", component:QuadradoComponent},
  {path: "cubo", component:CuboComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
