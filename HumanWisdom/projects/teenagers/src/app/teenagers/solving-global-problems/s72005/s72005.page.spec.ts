import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S72005Page } from './s72005.page';

describe('S72005Page', () => {
  let component: S72005Page;
  let fixture: ComponentFixture<S72005Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S72005Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S72005Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
