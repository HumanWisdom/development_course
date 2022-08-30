import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PartnershipSubscribedPage } from './partnership-subscribed.page';

describe('PartnershipSubscribedPage', () => {
  let component: PartnershipSubscribedPage;
  let fixture: ComponentFixture<PartnershipSubscribedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnershipSubscribedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PartnershipSubscribedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
