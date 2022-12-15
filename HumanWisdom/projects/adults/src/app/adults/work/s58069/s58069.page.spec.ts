import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58069Page } from './s58069.page';

describe('S58069Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58069Page;
  let fixture: ComponentFixture<S58069Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58069Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58069Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
