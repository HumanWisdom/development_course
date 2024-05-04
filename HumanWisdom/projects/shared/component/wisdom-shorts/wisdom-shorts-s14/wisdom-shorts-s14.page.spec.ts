import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WisdomShortsS14Page } from './wisdom-shorts-s14.page';

describe('WisdomShortsS14Page', () => {
  let component: WisdomShortsS14Page;
  let fixture: ComponentFixture<WisdomShortsS14Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WisdomShortsS14Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WisdomShortsS14Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
