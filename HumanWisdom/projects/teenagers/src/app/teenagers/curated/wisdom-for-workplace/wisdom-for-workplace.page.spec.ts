import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WisdomForWorkplacePage } from './wisdom-for-workplace.page';

describe('WisdomForWorkplacePage', () => {
  let component: WisdomForWorkplacePage;
  let fixture: ComponentFixture<WisdomForWorkplacePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WisdomForWorkplacePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WisdomForWorkplacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
