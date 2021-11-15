import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WebpageLandingS01Page } from './webpage-landing-s01.page';

describe('WebpageLandingS01Page', () => {
  let component: WebpageLandingS01Page;
  let fixture: ComponentFixture<WebpageLandingS01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebpageLandingS01Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WebpageLandingS01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
