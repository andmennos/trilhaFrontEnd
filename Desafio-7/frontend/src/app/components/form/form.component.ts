import { Component, OnInit} from '@angular/core';
import { ServiceService } from '../services/service.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formulario: FormGroup = new FormGroup({
    nome: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    mensagem: new FormControl(null, Validators.required)
  })


  constructor(private service: ServiceService) { }

  ngOnInit() {

  }

  getErrorMessageNome() {
    if (this.formulario.controls.nome.hasError('required')) {
      return 'You must enter your name';
    }

    return this.formulario.hasError('nome') ? 'Not a name' : '';
  }

  getErrorMessageEmail() {
    if (this.formulario.controls.email.hasError('required')) {
      return 'You must enter your e-mail';
    }

    return this.formulario.hasError('email') ? 'Not a valid e-mail' : '';
  }

  getErrorMessageMensagem() {
    if (this.formulario.controls.mensagem.hasError('required')) {
      return 'You must enter your message';
    }

    return this.formulario.hasError('mensagem') ? 'Not a valid message' : '';
  }

  enviaMensagem(): void {
    this.service.mensagem(this.formulario.value).subscribe(() =>{
      this.service.showMessage('Mensagem enviada!'),
      this.formulario.reset()
    })
  }
}
