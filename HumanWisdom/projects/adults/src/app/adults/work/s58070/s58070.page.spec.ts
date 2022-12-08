import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58070Page } from './s58070.page';

describe('S58070Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58070Page;
  let fixture: ComponentFixture<S58070Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58070Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58070Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
