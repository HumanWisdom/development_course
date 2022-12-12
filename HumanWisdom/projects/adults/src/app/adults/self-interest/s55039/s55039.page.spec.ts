import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55039Page } from './s55039.page';

describe('S55039Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55039Page;
  let fixture: ComponentFixture<S55039Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55039Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55039Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
