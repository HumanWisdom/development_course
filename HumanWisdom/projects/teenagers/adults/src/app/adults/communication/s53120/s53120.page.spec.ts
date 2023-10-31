import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53120Page } from './s53120.page';

describe('S53120Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53120Page;
  let fixture: ComponentFixture<S53120Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53120Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53120Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
