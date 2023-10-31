import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61065tPage } from './s61065t.page';

describe('S61065tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61065tPage;
  let fixture: ComponentFixture<S61065tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61065tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61065tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
