import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48039Page } from './s48039.page';

describe('S48039Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48039Page;
  let fixture: ComponentFixture<S48039Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48039Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48039Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
