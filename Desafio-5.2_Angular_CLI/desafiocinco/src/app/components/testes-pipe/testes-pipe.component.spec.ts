import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestesPipeComponent } from './testes-pipe.component';

describe('TestesPipeComponent', () => {
  let component: TestesPipeComponent;
  let fixture: ComponentFixture<TestesPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestesPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestesPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
