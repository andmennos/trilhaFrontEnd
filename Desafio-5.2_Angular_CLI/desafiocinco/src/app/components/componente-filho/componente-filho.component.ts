import { ComponentePaiComponent } from './../componente-pai/componente-pai.component';
import { Component } from '@angular/core';
import { TesteServiceService } from 'src/app/services/teste-service.service';

@Component({
  selector: 'app-componente-filho',
  templateUrl: './componente-filho.component.html',
  styleUrls: ['./componente-filho.component.scss']
})
export class ComponenteFilhoComponent extends ComponentePaiComponent{
}
