import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S41019p4Page } from './s41019p4.page';

describe('S41019p4Page', () => {
  let component: S41019p4Page;
  let fixture: ComponentFixture<S41019p4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S41019p4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S41019p4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
