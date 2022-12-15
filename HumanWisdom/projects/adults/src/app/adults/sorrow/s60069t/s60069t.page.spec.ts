import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60069tPage } from './s60069t.page';

describe('S60069tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60069tPage;
  let fixture: ComponentFixture<S60069tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60069tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60069tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
