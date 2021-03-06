import { Router, NavigationExtras } from '@angular/router';
import { Component, Input } from '@angular/core';
import { TesteServiceService } from 'src/app/services/teste-service.service';

@Component({
  selector: 'app-componente-pai',
  template: "",
})

export class ComponentePaiComponent {
  @Input() numeroComponent: number = 0;
  valor = this.numeroComponent;
  nomeSobrenome:string = "Anderson Ferreira";

  constructor(private router: Router){}

  isPrime(numeroComponent){
    let divisor = 0;
    for (let i = 1; i <= numeroComponent; i++){
      if (numeroComponent % i === 0){
        divisor++;
      }
    }
    if (divisor == 2){
      return "é primo";
    }
    else {
      return "não é primo"
    }
  }

  isPar(valor):string {
    return valor % 2===0 ? "par":"impar";
  }

  vaiParaCubo(){
    this.router.navigate(['cubo'], {queryParams: {valor:this.numeroComponent}})
  }



}
