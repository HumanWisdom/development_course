import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60085tPage } from './s60085t.page';

describe('S60085tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60085tPage;
  let fixture: ComponentFixture<S60085tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60085tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60085tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
