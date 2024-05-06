import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WisdomShortsS12Page } from './wisdom-shorts-s12.page';

describe('WisdomShortsS12Page', () => {
  let component: WisdomShortsS12Page;
  let fixture: ComponentFixture<WisdomShortsS12Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WisdomShortsS12Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WisdomShortsS12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
