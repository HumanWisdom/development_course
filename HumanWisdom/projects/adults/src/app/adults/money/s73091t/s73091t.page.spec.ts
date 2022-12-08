import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73091tPage } from './s73091t.page';

describe('S73091tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73091tPage;
  let fixture: ComponentFixture<S73091tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73091tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73091tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
