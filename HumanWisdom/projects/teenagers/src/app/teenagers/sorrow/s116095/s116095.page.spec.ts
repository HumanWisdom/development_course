import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116095Page } from './s116095.page';

describe('S116095Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116095Page;
  let fixture: ComponentFixture<S116095Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116095Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116095Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
