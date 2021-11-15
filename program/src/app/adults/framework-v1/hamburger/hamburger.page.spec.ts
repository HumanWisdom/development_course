import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HamburgerPage } from './hamburger.page';

describe('HamburgerPage', () => {
  let component: HamburgerPage;
  let fixture: ComponentFixture<HamburgerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HamburgerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HamburgerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
