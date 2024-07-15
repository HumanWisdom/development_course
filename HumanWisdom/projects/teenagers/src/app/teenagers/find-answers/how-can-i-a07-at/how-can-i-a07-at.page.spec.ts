import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HowCanIA07AtPage } from './how-can-i-a07-at.page';

describe('HowCanIA07AtPage', () => {
  let component: HowCanIA07AtPage;
  let fixture: ComponentFixture<HowCanIA07AtPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HowCanIA07AtPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HowCanIA07AtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
