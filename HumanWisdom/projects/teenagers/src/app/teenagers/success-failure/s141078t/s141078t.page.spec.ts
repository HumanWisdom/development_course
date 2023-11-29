import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141078tPage } from './s141078t.page';

describe('S141078tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141078tPage;
  let fixture: ComponentFixture<S141078tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141078tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141078tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
