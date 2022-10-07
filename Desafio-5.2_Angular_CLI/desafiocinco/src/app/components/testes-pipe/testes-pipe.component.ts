import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testes-pipe',
  templateUrl: './testes-pipe.component.html',
  styleUrls: ['./testes-pipe.component.scss']
})
export class TestesPipeComponent {

  dataEvento : string = "10/21/2021";
  precoEvento: number = 35;
  percentVendido: number = 0.8465;

}
