import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTesteModuleComponent } from './component-teste-module.component';

describe('ComponentTesteModuleComponent', () => {
  let component: ComponentTesteModuleComponent;
  let fixture: ComponentFixture<ComponentTesteModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentTesteModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentTesteModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
