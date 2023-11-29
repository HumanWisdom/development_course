import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141069Page } from './s141069.page';

describe('S141069Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141069Page;
  let fixture: ComponentFixture<S141069Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141069Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141069Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
