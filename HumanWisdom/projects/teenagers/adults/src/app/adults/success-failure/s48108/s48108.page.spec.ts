import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48108Page } from './s48108.page';

describe('S48108Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48108Page;
  let fixture: ComponentFixture<S48108Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48108Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48108Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
