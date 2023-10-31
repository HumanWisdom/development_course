import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46003Page } from './s46003.page';

describe('S46003Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46003Page;
  let fixture: ComponentFixture<S46003Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46003Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46003Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
