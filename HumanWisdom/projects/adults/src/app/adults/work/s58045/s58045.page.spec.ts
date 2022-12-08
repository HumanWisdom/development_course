import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58045Page } from './s58045.page';

describe('S58045Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58045Page;
  let fixture: ComponentFixture<S58045Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58045Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58045Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
