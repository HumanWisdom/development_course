import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S78011p0Page } from './s78011p0.page';

describe('S78011p0Page', () => {
  let component: S78011p0Page;
  let fixture: ComponentFixture<S78011p0Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S78011p0Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S78011p0Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
