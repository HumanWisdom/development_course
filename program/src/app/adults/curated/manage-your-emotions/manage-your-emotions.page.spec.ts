import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManageYourEmotionsPage } from './manage-your-emotions.page';

describe('ManageYourEmotionsPage', () => {
  let component: ManageYourEmotionsPage;
  let fixture: ComponentFixture<ManageYourEmotionsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageYourEmotionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManageYourEmotionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
