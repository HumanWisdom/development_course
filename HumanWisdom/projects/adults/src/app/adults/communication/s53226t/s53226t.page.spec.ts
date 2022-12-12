import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53226tPage } from './s53226t.page';

describe('S53226tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53226tPage;
  let fixture: ComponentFixture<S53226tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53226tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53226tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
