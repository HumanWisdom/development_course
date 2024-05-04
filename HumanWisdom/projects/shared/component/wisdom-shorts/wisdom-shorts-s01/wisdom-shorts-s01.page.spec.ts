import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WisdomShortsS01Page } from './wisdom-shorts-s01.page';

describe('WisdomShortsS01Page', () => {
  let component: WisdomShortsS01Page;
  let fixture: ComponentFixture<WisdomShortsS01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WisdomShortsS01Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WisdomShortsS01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
