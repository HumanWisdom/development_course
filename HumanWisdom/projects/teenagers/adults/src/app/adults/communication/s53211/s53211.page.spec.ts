import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53211Page } from './s53211.page';

describe('S53211Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53211Page;
  let fixture: ComponentFixture<S53211Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53211Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53211Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
