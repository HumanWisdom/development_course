import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardModulePage } from './dashboard-module.page';

describe('DashboardModulePage', () => {
  let component: DashboardModulePage;
  let fixture: ComponentFixture<DashboardModulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardModulePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardModulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
