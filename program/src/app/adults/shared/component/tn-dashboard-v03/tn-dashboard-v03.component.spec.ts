import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TnDashboardV03Component } from './tn-dashboard-v03.component';

describe('TnDashboardV03Component', () => {
  let component: TnDashboardV03Component;
  let fixture: ComponentFixture<TnDashboardV03Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TnDashboardV03Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TnDashboardV03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
