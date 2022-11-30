import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S35005p4Page } from './s35005p4.page';

describe('S35005p4Page', () => {
  let component: S35005p4Page;
  let fixture: ComponentFixture<S35005p4Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ S35005p4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S35005p4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
