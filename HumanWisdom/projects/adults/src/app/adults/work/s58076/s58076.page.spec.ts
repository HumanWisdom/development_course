import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58076Page } from './s58076.page';

describe('S58076Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58076Page;
  let fixture: ComponentFixture<S58076Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58076Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58076Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
