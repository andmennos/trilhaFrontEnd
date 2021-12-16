import { ComponentePaiComponent } from './../componente-pai/componente-pai.component';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CuboComponent } from '../cubo/cubo.component';

@Component({
  selector: 'app-componente-filho',
  templateUrl: './componente-filho.component.html',
  styleUrls: ['./componente-filho.component.scss']
})
export class ComponenteFilhoComponent extends ComponentePaiComponent{



}
