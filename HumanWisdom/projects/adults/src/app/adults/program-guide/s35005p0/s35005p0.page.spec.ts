import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S35005p0Page } from './s35005p0.page';

describe('S35005p0Page', () => {
  let component: S35005p0Page;
  let fixture: ComponentFixture<S35005p0Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S35005p0Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S35005p0Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
