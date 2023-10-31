import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57004tPage } from './s57004t.page';

describe('S57004tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57004tPage;
  let fixture: ComponentFixture<S57004tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57004tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57004tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
