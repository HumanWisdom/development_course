import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S35011p0Page } from './s35011p0.page';

describe('S35011p0Page', () => {
  let component: S35011p0Page;
  let fixture: ComponentFixture<S35011p0Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S35011p0Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S35011p0Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
