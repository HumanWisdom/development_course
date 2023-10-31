import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60082tPage } from './s60082t.page';

describe('S60082tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60082tPage;
  let fixture: ComponentFixture<S60082tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60082tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60082tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
