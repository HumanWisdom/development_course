import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HwpProjectPage } from './hwp-project.page';

describe('HwpProjectPage', () => {
  let component: HwpProjectPage;
  let fixture: ComponentFixture<HwpProjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HwpProjectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HwpProjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
