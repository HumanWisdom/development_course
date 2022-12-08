import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53082Page } from './s53082.page';

describe('S53082Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53082Page;
  let fixture: ComponentFixture<S53082Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53082Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53082Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
