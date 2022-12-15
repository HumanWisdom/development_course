import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S41019p8Page } from './s41019p8.page';

describe('S41019p8Page', () => {
  let component: S41019p8Page;
  let fixture: ComponentFixture<S41019p8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S41019p8Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S41019p8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
