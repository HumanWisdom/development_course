import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WisdomShortsIndexPage } from './wisdom-shorts-index.page';

describe('WisdomShortsIndexPage', () => {
  let component: WisdomShortsIndexPage;
  let fixture: ComponentFixture<WisdomShortsIndexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WisdomShortsIndexPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WisdomShortsIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
