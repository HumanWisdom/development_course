import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53195tPage } from './s53195t.page';

describe('S53195tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53195tPage;
  let fixture: ComponentFixture<S53195tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53195tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53195tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
