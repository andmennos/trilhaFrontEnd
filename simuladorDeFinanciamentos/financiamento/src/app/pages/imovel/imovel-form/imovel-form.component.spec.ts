import { RecursosBasicosService } from './../../shared/services/recursos-basicos.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ImovelStorageService } from './../shared/imovel-storage.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Injector } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { ImovelFormComponent } from './imovel-form.component';

describe('ImovelFormComponent', () => {
  let component: ImovelFormComponent;
  let fixture: ComponentFixture<ImovelFormComponent>;
  let injectorSpy: jasmine.SpyObj<Injector>;
  let locationSpy: jasmine.SpyObj<Location>;
  let routerSpy: jasmine.SpyObj<Router>;
  let imovelStorageServiceSpy: jasmine.SpyObj<ImovelStorageService>;
  const formBuilderSpy: FormBuilder = new FormBuilder();

  beforeEach(async () => {
    imovelStorageServiceSpy = jasmine.createSpyObj<ImovelStorageService>(
      "ImovelStorageService",
      ["setImovel"]
    );

    await TestBed.configureTestingModule({
      declarations: [ImovelFormComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        RecursosBasicosService,
        { provide: Injector, useValue: injectorSpy },
        { provide: Location, useValue:  locationSpy },
        { provide: Router, useValue: routerSpy },
        { provide: FormBuilder, useValue: formBuilderSpy },
        { provide: ImovelStorageService, useValue: imovelStorageServiceSpy },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImovelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
