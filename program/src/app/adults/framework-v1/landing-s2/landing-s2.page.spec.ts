import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LandingS2Page } from './landing-s2.page';

describe('LandingS2Page', () => {
  let component: LandingS2Page;
  let fixture: ComponentFixture<LandingS2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingS2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LandingS2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
