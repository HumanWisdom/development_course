import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60045Page } from './s60045.page';

describe('S60045Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60045Page;
  let fixture: ComponentFixture<S60045Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60045Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60045Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
