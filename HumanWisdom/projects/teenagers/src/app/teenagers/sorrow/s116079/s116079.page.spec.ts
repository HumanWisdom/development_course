import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116079Page } from './s116079.page';

describe('S116079Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116079Page;
  let fixture: ComponentFixture<S116079Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116079Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116079Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
