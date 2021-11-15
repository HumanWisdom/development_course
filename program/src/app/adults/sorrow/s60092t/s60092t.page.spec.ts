import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60092tPage } from './s60092t.page';

describe('S60092tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60092tPage;
  let fixture: ComponentFixture<S60092tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60092tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60092tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
