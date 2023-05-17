import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116076Page } from './s116076.page';

describe('S116076Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116076Page;
  let fixture: ComponentFixture<S116076Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116076Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116076Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
