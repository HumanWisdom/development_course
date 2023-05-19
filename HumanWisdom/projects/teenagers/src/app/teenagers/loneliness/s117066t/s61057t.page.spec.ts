import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61057tPage } from './s61057t.page';

describe('S61057tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61057tPage;
  let fixture: ComponentFixture<S61057tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61057tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61057tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
