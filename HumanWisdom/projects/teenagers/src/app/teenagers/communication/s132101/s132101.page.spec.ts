import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132101Page } from './s132101.page';

describe('S132101Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132101Page;
  let fixture: ComponentFixture<S132101Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132101Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132101Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
