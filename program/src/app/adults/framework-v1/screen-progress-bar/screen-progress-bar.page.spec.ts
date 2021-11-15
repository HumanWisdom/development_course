import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScreenProgressBarPage } from './screen-progress-bar.page';

describe('ScreenProgressBarPage', () => {
  let component: ScreenProgressBarPage;
  let fixture: ComponentFixture<ScreenProgressBarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenProgressBarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScreenProgressBarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
