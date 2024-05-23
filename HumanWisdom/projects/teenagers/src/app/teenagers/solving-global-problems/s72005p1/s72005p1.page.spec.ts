import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S72005p1Page } from './s72005p1.page';

describe('S72005p1Page', () => {
  let component: S72005p1Page;
  let fixture: ComponentFixture<S72005p1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S72005p1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S72005p1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
