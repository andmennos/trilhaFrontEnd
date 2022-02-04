import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprovadoComponent } from './reprovado.component';

describe('ReprovadoComponent', () => {
  let component: ReprovadoComponent;
  let fixture: ComponentFixture<ReprovadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReprovadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReprovadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
