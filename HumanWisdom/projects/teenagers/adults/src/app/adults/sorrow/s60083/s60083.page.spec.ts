import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60083Page } from './s60083.page';

describe('S60083Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60083Page;
  let fixture: ComponentFixture<S60083Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60083Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60083Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
