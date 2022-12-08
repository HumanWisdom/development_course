import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TnPartnershipAppComponent } from './tn-partnership-app.component';

describe('TnPartnershipAppComponent', () => {
  let component: TnPartnershipAppComponent;
  let fixture: ComponentFixture<TnPartnershipAppComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TnPartnershipAppComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TnPartnershipAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
