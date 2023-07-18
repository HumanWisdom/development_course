import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132187tPage } from './s132187t.page';

describe('S132187tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132187tPage;
  let fixture: ComponentFixture<S132187tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132187tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132187tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
