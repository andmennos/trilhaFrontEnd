import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImovelFormComponent } from './imovel-form.component';

describe('ImovelFormComponent', () => {
  let component: ImovelFormComponent;
  let fixture: ComponentFixture<ImovelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImovelFormComponent ]
    })
    .compileComponents();
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
