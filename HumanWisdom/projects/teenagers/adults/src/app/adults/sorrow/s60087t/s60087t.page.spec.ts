import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60087tPage } from './s60087t.page';

describe('S60087tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60087tPage;
  let fixture: ComponentFixture<S60087tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60087tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60087tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
