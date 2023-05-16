import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60089tPage } from './s60089t.page';

describe('S60089tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60089tPage;
  let fixture: ComponentFixture<S60089tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60089tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60089tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
