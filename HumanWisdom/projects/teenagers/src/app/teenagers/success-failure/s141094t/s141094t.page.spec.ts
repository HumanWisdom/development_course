import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141094tPage } from './s141094t.page';

describe('S141094tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141094tPage;
  let fixture: ComponentFixture<S141094tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141094tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141094tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
