import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cubo',
  templateUrl: './cubo.component.html',
  styleUrls: ['./cubo.component.scss']
})
export class CuboComponent {

  valor: number;

  constructor( private router: Router){

  }

  vaiParaCubo(){
    this.router.navigate(['/cubo']), {queryParams:{}}
    }

  ngOnInit(): void {
  }

}
