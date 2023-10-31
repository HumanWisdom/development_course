import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53030Page } from './s53030.page';

describe('S53030Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53030Page;
  let fixture: ComponentFixture<S53030Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53030Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53030Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
