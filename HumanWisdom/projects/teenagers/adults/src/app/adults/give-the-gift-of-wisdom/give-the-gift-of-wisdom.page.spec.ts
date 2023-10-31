import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GiveTheGiftOfWisdomPage } from './give-the-gift-of-wisdom.page';

describe('GiveTheGiftOfWisdomPage', () => {
  let component: GiveTheGiftOfWisdomPage;
  let fixture: ComponentFixture<GiveTheGiftOfWisdomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveTheGiftOfWisdomPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GiveTheGiftOfWisdomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
