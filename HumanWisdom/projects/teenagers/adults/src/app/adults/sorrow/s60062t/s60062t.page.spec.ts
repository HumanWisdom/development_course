import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60062tPage } from './s60062t.page';

describe('S60062tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60062tPage;
  let fixture: ComponentFixture<S60062tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60062tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60062tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
