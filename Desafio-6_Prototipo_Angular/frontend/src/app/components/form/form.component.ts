import { Component, OnInit, HostListener } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formulario: FormGroup;

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.formulario = new FormGroup({
      'nome': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'mensagem': new FormControl(null, [Validators.required, Validators.minLength(5)])
    })
  }

  enviaMensagem(): void {
    this.service.mensagem(this.formulario.value).subscribe(() =>{
      this.service.showMessage('Mensagem enviada!'),
      this.formulario.reset()
    })
  }

}
