import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25024tPage } from './s25024t.page';

describe('S25024tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25024tPage;
  let fixture: ComponentFixture<S25024tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25024tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25024tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
