import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60039Page } from './s60039.page';

describe('S60039Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60039Page;
  let fixture: ComponentFixture<S60039Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60039Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60039Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
