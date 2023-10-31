import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45009tPage } from './s45009t.page';

describe('S45009tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45009tPage;
  let fixture: ComponentFixture<S45009tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45009tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45009tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
