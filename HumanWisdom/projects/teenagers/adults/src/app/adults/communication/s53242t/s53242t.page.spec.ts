import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53242tPage } from './s53242t.page';

describe('S53242tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53242tPage;
  let fixture: ComponentFixture<S53242tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53242tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53242tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
