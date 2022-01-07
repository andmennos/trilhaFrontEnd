import { MatFormFieldControl } from '@angular/material/form-field';
import { Component, OnInit} from '@angular/core';
import { ServiceService } from '../services/service.service';
import { FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  nome = new FormControl(null, Validators.required);
  email = new FormControl(null, [Validators.required, Validators.email]);
  mensagem =  new FormControl(null, [Validators.required, Validators.minLength(5)]);

  constructor(private service: ServiceService) { }

  ngOnInit(): void {

  }

  getErrorMessageNome() {
    if (this.nome.hasError('required')) {
      return 'You must enter your name';
    }

    return this.nome.hasError('nome') ? 'Not a name' : '';
  }

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'You must enter your e-mail';
    }

    return this.email.hasError('email') ? 'Not a valid e-mail' : '';
  }

  /*enviaMensagem(): void {
    this.service.mensagem(this.formulario.value).subscribe(() =>{
      this.service.showMessage('Mensagem enviada!'),
      this.formulario.reset()
    })
  }*/
}
