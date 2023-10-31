import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S41019p6Page } from './s41019p6.page';

describe('S41019p6Page', () => {
  let component: S41019p6Page;
  let fixture: ComponentFixture<S41019p6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S41019p6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S41019p6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
