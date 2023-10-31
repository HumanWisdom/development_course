import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S30002tPage } from './s30002t.page';

describe('S30002tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S30002tPage;
  let fixture: ComponentFixture<S30002tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S30002tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S30002tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
