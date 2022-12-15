import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WisdomShortsS05Page } from './wisdom-shorts-s05.page';

describe('WisdomShortsS05Page', () => {
  let component: WisdomShortsS05Page;
  let fixture: ComponentFixture<WisdomShortsS05Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WisdomShortsS05Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WisdomShortsS05Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
