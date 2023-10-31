import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55009tPage } from './s55009t.page';

describe('S55009tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55009tPage;
  let fixture: ComponentFixture<S55009tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55009tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55009tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
