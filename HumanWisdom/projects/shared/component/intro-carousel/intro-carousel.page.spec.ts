import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntroCarouselPage } from './intro-carousel.page';

describe('IntroCarouselPage', () => {
  let component: IntroCarouselPage;
  let fixture: ComponentFixture<IntroCarouselPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroCarouselPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntroCarouselPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
