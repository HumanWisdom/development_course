import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58063Page } from './s58063.page';

describe('S58063Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58063Page;
  let fixture: ComponentFixture<S58063Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58063Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58063Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
