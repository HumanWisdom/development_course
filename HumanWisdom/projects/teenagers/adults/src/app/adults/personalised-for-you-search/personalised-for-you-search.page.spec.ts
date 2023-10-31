import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonalisedForYouSearchPage } from './personalised-for-you-search.page';

describe('PersonalisedForYouSearchPage', () => {
  let component: PersonalisedForYouSearchPage;
  let fixture: ComponentFixture<PersonalisedForYouSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalisedForYouSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalisedForYouSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
