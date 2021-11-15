import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WebpageLandingS02Page } from './webpage-landing-s02.page';

describe('WebpageLandingS02Page', () => {
  let component: WebpageLandingS02Page;
  let fixture: ComponentFixture<WebpageLandingS02Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebpageLandingS02Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WebpageLandingS02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
