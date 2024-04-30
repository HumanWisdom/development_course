import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WisdomShortsS03Page } from './wisdom-shorts-s03.page';

describe('WisdomShortsS03Page', () => {
  let component: WisdomShortsS03Page;
  let fixture: ComponentFixture<WisdomShortsS03Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WisdomShortsS03Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WisdomShortsS03Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
