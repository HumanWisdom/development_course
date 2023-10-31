import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58060tPage } from './s58060t.page';

describe('S58060tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58060tPage;
  let fixture: ComponentFixture<S58060tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58060tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58060tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
