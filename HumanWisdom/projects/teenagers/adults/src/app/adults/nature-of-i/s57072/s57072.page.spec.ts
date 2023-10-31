import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57072Page } from './s57072.page';

describe('S57072Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57072Page;
  let fixture: ComponentFixture<S57072Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57072Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57072Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
