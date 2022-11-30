import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58060Page } from './s58060.page';

describe('S58060Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58060Page;
  let fixture: ComponentFixture<S58060Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58060Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58060Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
