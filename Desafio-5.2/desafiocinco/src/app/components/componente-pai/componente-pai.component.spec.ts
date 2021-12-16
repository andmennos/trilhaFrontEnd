import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePaiComponent } from './componente-pai.component';

describe('ComponentePaiComponent', () => {
  let component: ComponentePaiComponent;
  let fixture: ComponentFixture<ComponentePaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentePaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentePaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
