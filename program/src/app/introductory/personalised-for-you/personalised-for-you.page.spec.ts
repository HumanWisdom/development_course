import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonalisedForYouPage } from './personalised-for-you.page';

describe('PersonalisedForYouPage', () => {
  let component: PersonalisedForYouPage;
  let fixture: ComponentFixture<PersonalisedForYouPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalisedForYouPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalisedForYouPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
