import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTesteModule2Component } from './component-teste-module2.component';

describe('ComponentTesteModule2Component', () => {
  let component: ComponentTesteModule2Component;
  let fixture: ComponentFixture<ComponentTesteModule2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentTesteModule2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentTesteModule2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
