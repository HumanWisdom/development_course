import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53104tPage } from './s53104t.page';

describe('S53104tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53104tPage;
  let fixture: ComponentFixture<S53104tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53104tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53104tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
