import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53203Page } from './s53203.page';

describe('S53203Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53203Page;
  let fixture: ComponentFixture<S53203Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53203Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53203Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
