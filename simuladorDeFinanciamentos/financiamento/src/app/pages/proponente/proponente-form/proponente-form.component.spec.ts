import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProponenteFormComponent } from './proponente-form.component';

describe('ProponenteFormComponent', () => {
  let component: ProponenteFormComponent;
  let fixture: ComponentFixture<ProponenteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProponenteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProponenteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
