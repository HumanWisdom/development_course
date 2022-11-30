import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58057tPage } from './s58057t.page';

describe('S58057tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58057tPage;
  let fixture: ComponentFixture<S58057tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58057tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58057tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
