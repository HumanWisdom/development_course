import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S41019p2Page } from './s41019p2.page';

describe('S41019p2Page', () => {
  let component: S41019p2Page;
  let fixture: ComponentFixture<S41019p2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S41019p2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S41019p2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
