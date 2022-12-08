import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53033tPage } from './s53033t.page';

describe('S53033tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53033tPage;
  let fixture: ComponentFixture<S53033tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53033tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53033tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
