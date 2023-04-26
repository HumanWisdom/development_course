import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S107005Page } from './s107005.page';

describe('S107005Page', () => {
  let component: S107005Page;
  let fixture: ComponentFixture<S107005Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S107005Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S107005Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
