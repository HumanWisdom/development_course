import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48008Page } from './s48008.page';

describe('S48008Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48008Page;
  let fixture: ComponentFixture<S48008Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48008Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48008Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
