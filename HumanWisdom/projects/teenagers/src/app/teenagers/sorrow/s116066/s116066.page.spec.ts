import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116066Page } from './s116066.page';

describe('S116066Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116066Page;
  let fixture: ComponentFixture<S116066Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116066Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116066Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
