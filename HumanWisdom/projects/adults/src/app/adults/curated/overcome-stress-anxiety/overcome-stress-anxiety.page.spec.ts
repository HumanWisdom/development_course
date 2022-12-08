import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OvercomeStressAnxietyPage } from './overcome-stress-anxiety.page';

describe('OvercomeStressAnxietyPage', () => {
  let component: OvercomeStressAnxietyPage;
  let fixture: ComponentFixture<OvercomeStressAnxietyPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OvercomeStressAnxietyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OvercomeStressAnxietyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
