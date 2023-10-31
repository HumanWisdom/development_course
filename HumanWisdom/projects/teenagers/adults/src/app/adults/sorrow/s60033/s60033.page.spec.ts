import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60033Page } from './s60033.page';

describe('S60033Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60033Page;
  let fixture: ComponentFixture<S60033Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60033Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60033Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
