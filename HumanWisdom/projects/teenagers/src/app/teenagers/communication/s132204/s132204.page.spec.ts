import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132204Page } from './s132204.page';

describe('S132204Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132204Page;
  let fixture: ComponentFixture<S132204Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132204Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132204Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
