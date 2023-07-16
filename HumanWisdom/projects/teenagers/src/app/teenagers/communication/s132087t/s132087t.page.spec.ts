import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53085tPage } from './s132087t.page';

describe('S53085tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53085tPage;
  let fixture: ComponentFixture<S53085tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53085tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53085tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
