import { Component, OnInit, Injector } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Proponente } from '../shared/proponente.model'
import { RecursosBasicosService } from '../../shared/services/recursos-basicos.service';
import { ProponenteValidacoes } from './validacoes';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-proponente-form',
  templateUrl: './proponente-form.component.html',
  styleUrls: ['./proponente-form.component.scss']
})

export class ProponenteFormComponent extends RecursosBasicosService implements OnInit {

  anoNascimento = "2004"
  enviaForm = this.botaoSalvar();
  modelo = Proponente;
  public menorDe18String = this.calculoIdade();


  imaskEmail = {
    mask: String
  };

  imaskCpf = {
    mask: '000.000.000-00'
  }

  imaskCep = {
    mask: '00000-000'
  }
  imaskCel = {
    mask:'(00)00000-0000'
  }
  imaskData = {
    mask: '00/00/0000'
  }

  ptBR = {
    firstDayOfWeek: 0,
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    dayNamesMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'],
    monthNames: [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
      'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    today: 'Hoje',
    clear: 'Limpar'
  }

  constructor(
    injector: Injector,
    location: Location,
    router: Router,
    protected formBuilder: FormBuilder,

  ){
    super(injector, location, router)
  }

  imprimeTitulo():string {
    return 'Dados do Proponente'
  }

  protected calculoIdade(){
    const anoAtual = Number("2022");

  }

  ngOnInit(){
    this.geraTitulo(this.imprimeTitulo());
    this.geraRecursoForm();

  }

  protected geraRecursoForm(){
    this.recursosFormulario = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(3), Validators.pattern('^[ a-zA-Z]*$')]],
      profissao: [null, [Validators.required, Validators.minLength(3), Validators.pattern('^[ a-zA-Z]*$')]],
      cpf: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      data: [null, [Validators.required, ProponenteValidacoes.menorIdade]],
      cep: [null, [Validators.required]],
      cel: [null, [Validators.required]],
    });
  }

  protected botaoSalvar(){
    const url = this.location.path();
    this.enviarForm = true;

    if (url == "/dados-do-proponente")
      this.rota = this.criaRotaImovel();
      return this.rota;
  }

  protected criaRotaImovel(){
    return "/dados-do-imovel"
  }



}
