import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60096Page } from './s60096.page';

describe('S60096Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60096Page;
  let fixture: ComponentFixture<S60096Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60096Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60096Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
