import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58044Page } from './s58044.page';

describe('S58044Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58044Page;
  let fixture: ComponentFixture<S58044Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58044Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58044Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
