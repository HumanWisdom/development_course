import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116042Page } from './s116042.page';

describe('S116042Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116042Page;
  let fixture: ComponentFixture<S116042Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116042Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116042Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
