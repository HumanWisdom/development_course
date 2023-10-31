import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57009tPage } from './s57009t.page';

describe('S57009tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57009tPage;
  let fixture: ComponentFixture<S57009tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57009tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57009tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
