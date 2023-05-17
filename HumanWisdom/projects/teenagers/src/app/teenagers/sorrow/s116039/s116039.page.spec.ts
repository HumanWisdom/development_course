import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116039Page } from './s116039.page';

describe('S116039Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116039Page;
  let fixture: ComponentFixture<S116039Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116039Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116039Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
