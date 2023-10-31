import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60057Page } from './s60057.page';

describe('S60057Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60057Page;
  let fixture: ComponentFixture<S60057Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60057Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60057Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
