import { RecursosBasicosService } from './../shared/services/recursos-basicos.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { Injector } from '@angular/core';
import { Location } from '@angular/common';
import { ImovelStorageService } from '../imovel/shared/imovel-storage.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AprovadoComponent } from './aprovado.component';

fdescribe('AprovadoComponent', () => {
  let component: AprovadoComponent;
  let fixture: ComponentFixture<AprovadoComponent>;
  let routerSpy: jasmine.SpyObj<Router>;
  let injectorSpy: jasmine.SpyObj<Injector>;
  let locationSpy: jasmine.SpyObj<Location>;
  let imovelStorageServiceSpy = () => ({ getImovel: () => ({}) });

  beforeEach(() => {

    routerSpy = jasmine.createSpyObj<Router>("Router", ["routerState"]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AprovadoComponent],
      providers: [
        RecursosBasicosService,
        { provide: Router, useValue: routerSpy },
        { provide: Injector, useValue: injectorSpy },
        { provide: Location, useValue: locationSpy },
        { provide: ImovelStorageService, useValue: imovelStorageServiceSpy }
      ]
    });
    fixture = TestBed.createComponent(AprovadoComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it('makes expected calls', () => {
    spyOn(component, 'imprimeTitulo').and.callThrough();
    component.ngOnInit();
    expect(component.imprimeTitulo).toHaveBeenCalled();
  });

  it('makes expected calls', () => {
    const imovelStorageServiceStub: ImovelStorageService = fixture.debugElement.injector.get(
      ImovelStorageService
    );
    spyOn(component, 'imprimeTitulo').and.callThrough();
    spyOn(imovelStorageServiceStub, 'getImovel').and.callThrough();
    component.ngOnInit();
    expect(component.imprimeTitulo).toHaveBeenCalled();
    expect(imovelStorageServiceStub.getImovel).toHaveBeenCalled();
  });
});
