import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73095Page } from './s73095.page';

describe('S73095Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73095Page;
  let fixture: ComponentFixture<S73095Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73095Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73095Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
