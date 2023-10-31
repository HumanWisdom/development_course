import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60045tPage } from './s60045t.page';

describe('S60045tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60045tPage;
  let fixture: ComponentFixture<S60045tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60045tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60045tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
