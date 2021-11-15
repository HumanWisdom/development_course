import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61069Page } from './s61069.page';

describe('S61069Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61069Page;
  let fixture: ComponentFixture<S61069Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61069Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61069Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
