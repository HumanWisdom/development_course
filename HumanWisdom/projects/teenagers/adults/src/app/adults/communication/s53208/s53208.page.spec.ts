import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53208Page } from './s53208.page';

describe('S53208Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53208Page;
  let fixture: ComponentFixture<S53208Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53208Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53208Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
