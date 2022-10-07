import { ContactusComponent } from './components/template/contactus/contactus.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/template/main/main.component';



const routes: Routes = [
  {path: "", component: MainComponent},
  {path: "contact-us", component: ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
