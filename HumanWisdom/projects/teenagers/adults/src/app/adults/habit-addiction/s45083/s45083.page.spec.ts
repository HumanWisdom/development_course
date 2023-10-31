import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45083Page } from './s45083.page';

describe('S45083Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45083Page;
  let fixture: ComponentFixture<S45083Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45083Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45083Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
