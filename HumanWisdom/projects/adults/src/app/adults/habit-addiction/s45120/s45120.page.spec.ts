import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45120Page } from './s45120.page';

describe('S45120Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45120Page;
  let fixture: ComponentFixture<S45120Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45120Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45120Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
