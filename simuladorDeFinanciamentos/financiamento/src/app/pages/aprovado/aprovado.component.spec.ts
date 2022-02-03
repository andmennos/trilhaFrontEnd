import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovadoComponent } from './aprovado.component';

describe('AprovadoComponent', () => {
  let component: AprovadoComponent;
  let fixture: ComponentFixture<AprovadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprovadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AprovadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
