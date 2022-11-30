import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57008Page } from './s57008.page';

describe('S57008Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57008Page;
  let fixture: ComponentFixture<S57008Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57008Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57008Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
