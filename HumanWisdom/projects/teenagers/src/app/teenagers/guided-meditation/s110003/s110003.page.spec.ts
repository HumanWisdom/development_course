import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S110003Page } from './s110003.page';

describe('S110003Page', () => {
  // let  
    let component:  S110003Page;
  let fixture: ComponentFixture<S110003Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S110003Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S110003Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
