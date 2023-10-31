import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57023tPage } from './s57023t.page';

describe('S57023tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57023tPage;
  let fixture: ComponentFixture<S57023tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57023tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57023tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
