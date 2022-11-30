import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S30002Page } from './s30002.page';

describe('S30002Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S30002Page;
  let fixture: ComponentFixture<S30002Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S30002Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S30002Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
