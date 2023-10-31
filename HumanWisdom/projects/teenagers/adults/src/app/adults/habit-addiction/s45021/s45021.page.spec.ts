import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45021Page } from './s45021.page';

describe('S45021Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45021Page;
  let fixture: ComponentFixture<S45021Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45021Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45021Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
