import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58002Page } from './s58002.page';

describe('S58002Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58002Page;
  let fixture: ComponentFixture<S58002Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58002Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58002Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
