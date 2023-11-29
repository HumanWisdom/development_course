import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141074tPage } from './s141074t.page';

describe('S141074tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141074tPage;
  let fixture: ComponentFixture<S141074tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141074tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141074tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
