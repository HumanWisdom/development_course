import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S41019p3Page } from './s41019p3.page';

describe('S41019p3Page', () => {
  let component: S41019p3Page;
  let fixture: ComponentFixture<S41019p3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S41019p3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S41019p3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
