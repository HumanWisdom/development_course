import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60034Page } from './s60034.page';

describe('S60034Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60034Page;
  let fixture: ComponentFixture<S60034Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60034Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60034Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
