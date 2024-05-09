import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WisdomShortsS07Page } from './wisdom-shorts-s07.page';

describe('WisdomShortsS07Page', () => {
  let component: WisdomShortsS07Page;
  let fixture: ComponentFixture<WisdomShortsS07Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WisdomShortsS07Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WisdomShortsS07Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
