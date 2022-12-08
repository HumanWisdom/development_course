import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53178tPage } from './s53178t.page';

describe('S53178tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53178tPage;
  let fixture: ComponentFixture<S53178tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53178tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53178tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
