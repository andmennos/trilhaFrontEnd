import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-pai',
  template: "",
})

export class ComponentePaiComponent {

  @Input() numeroComponent: number = 0;


  isPar(valor):string {
    return valor % 2===0 ? "par":"impar";
  }


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
}
