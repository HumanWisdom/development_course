import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140073Page } from './s140073.page';

describe('S140073Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140073Page;
  let fixture: ComponentFixture<S140073Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140073Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140073Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
