import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CopingWithIllnessAtPage } from './coping-with-illness-at.page';

describe('CopingWithIllnessAtPage', () => {
  let component: CopingWithIllnessAtPage;
  let fixture: ComponentFixture<CopingWithIllnessAtPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CopingWithIllnessAtPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CopingWithIllnessAtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
