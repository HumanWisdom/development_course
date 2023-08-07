import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132120Page } from './s132120.page';

describe('S132120Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132120Page;
  let fixture: ComponentFixture<S132120Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132120Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132120Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
