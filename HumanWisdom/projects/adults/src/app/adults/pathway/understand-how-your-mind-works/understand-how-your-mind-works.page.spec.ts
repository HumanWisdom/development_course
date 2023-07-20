import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnderstandHowYourMindWorksPage } from './understand-how-your-mind-works.page';

describe('UnderstandHowYourMindWorksPage', () => {
  let component: UnderstandHowYourMindWorksPage;
  let fixture: ComponentFixture<UnderstandHowYourMindWorksPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderstandHowYourMindWorksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnderstandHowYourMindWorksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
