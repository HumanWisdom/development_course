import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S41019p7Page } from './s41019p7.page';

describe('S41019p7Page', () => {
  let component: S41019p7Page;
  let fixture: ComponentFixture<S41019p7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S41019p7Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S41019p7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
