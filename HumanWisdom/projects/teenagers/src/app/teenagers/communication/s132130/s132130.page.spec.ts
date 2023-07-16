import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132130Page } from './s132130.page';

describe('S132130Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132130Page;
  let fixture: ComponentFixture<S132130Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132130Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132130Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
