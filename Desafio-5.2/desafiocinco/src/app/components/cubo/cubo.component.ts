import { ListaNumerosComponent } from './../lista-numeros/lista-numeros.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cubo',
  templateUrl: './cubo.component.html',
  styleUrls: ['./cubo.component.scss']
})
export class CuboComponent implements OnInit{

  public valor;

  constructor(private route: ActivatedRoute){}

  ngOnInit () {
    this.route.queryParams.subscribe(params => {this.valor = params.valor;})
  }

}
