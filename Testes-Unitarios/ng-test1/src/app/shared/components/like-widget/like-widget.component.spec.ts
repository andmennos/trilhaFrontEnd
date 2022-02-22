import { LikeWidgetModule } from './like-widget.module';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { LikeWidgetComponent } from './like-widget.component';

describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;
  let component: LikeWidgetComponent = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({//Poderiamos ter declarado cada opção declarations, providers e imports.
      imports: [LikeWidgetModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
  });

  it('Should create component', () => {

    expect(component).toBeTruthy();
  });

  it( 'Should auto-generate ID during ngOnInit when (@Input id) is not assigned', () => {
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it('Should not auto-generate ID during ngOnInit when (@Input id) is assigned', () => {
    const someId = 'someId';
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });

  //É possível realizar a incrição de propriedades de output em nossos testes como se fossem Observables
  it(`#${LikeWidgetComponent.prototype.like.name}
    Should trigger (@Output liked) when called`, () => {
      spyOn(component.liked, 'emit')
      fixture.detectChanges();
      component.like();
      expect(component.liked.emit).toHaveBeenCalled();
 //     component.liked.subscribe(() => {
 //       expect(true).toBeTrue();
 //       done();
 //     });
 //     component.like();

  })

})


