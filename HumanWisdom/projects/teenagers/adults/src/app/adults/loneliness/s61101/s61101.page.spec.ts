import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61101Page } from './s61101.page';

describe('S61101Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61101Page;
  let fixture: ComponentFixture<S61101Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61101Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61101Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
