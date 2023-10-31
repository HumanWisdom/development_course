import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45054Page } from './s45054.page';

describe('S45054Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45054Page;
  let fixture: ComponentFixture<S45054Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45054Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45054Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
