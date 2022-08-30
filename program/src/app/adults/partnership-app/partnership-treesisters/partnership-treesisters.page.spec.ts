import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PartnershipTreesistersPage } from './partnership-treesisters.page';

describe('PartnershipTreesistersPage', () => {
  let component: PartnershipTreesistersPage;
  let fixture: ComponentFixture<PartnershipTreesistersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnershipTreesistersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PartnershipTreesistersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
