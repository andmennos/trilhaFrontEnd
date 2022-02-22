import { RecursosBasicosService } from './../../shared/services/recursos-basicos.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Injector } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Proponente } from '../shared/proponente.model';
import { RouterTestingModule } from '@angular/router/testing';
import { ProponenteFormComponent } from './proponente-form.component';

fdescribe(ProponenteFormComponent.name, () => {
  let component: ProponenteFormComponent;
  let fixture: ComponentFixture<ProponenteFormComponent>;
  let injectorSpy: jasmine.SpyObj<Injector>;
  let locationSpy: jasmine.SpyObj<Location>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    locationSpy = jasmine.createSpyObj<Location>("Location", ["path"]);
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ProponenteFormComponent],
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        RecursosBasicosService,
        { provide: Injector, useValue: injectorSpy },
        { provide: Location, useValue:  locationSpy },
        { provide: Router, useValue: routerSpy }
      ]
    });
    fixture = TestBed.createComponent(ProponenteFormComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`modelo has default value`, () => {
    expect(component.modelo).toEqual(Proponente);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'imprimeTitulo').and.callThrough();
      component.ngOnInit();
      expect(component.imprimeTitulo).toHaveBeenCalled();
    });
  });

  describe('botaoSalvar', () => {
    it('makes expected calls', () => {
      const locationStub: Location = fixture.debugElement.injector.get(
        Location
      );
      spyOn(component, 'criaRotaImovel').and.callThrough();
      spyOn(locationStub, 'path').and.callThrough();
      component.botaoSalvar();
      expect(component.criaRotaImovel).toHaveBeenCalled();
      expect(locationStub.path).toHaveBeenCalled();
    });
  });
});
