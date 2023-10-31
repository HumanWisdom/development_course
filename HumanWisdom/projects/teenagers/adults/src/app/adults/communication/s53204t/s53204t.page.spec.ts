import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53204tPage } from './s53204t.page';

describe('S53204tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53204tPage;
  let fixture: ComponentFixture<S53204tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53204tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53204tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
