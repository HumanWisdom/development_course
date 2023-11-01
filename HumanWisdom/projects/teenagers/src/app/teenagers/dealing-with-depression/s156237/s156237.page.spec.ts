import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S156237Page } from './s156237.page';

describe('S156237Page', () => {
  let component: S156237Page;
  let fixture: ComponentFixture<S156237Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ S156237Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();
    156238
    fixture = TestBed.createComponent(S156237Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
