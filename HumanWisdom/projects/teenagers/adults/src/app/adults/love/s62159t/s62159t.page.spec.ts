import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62159tPage } from './s62159t.page';

describe('S62159tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62159tPage;
  let fixture: ComponentFixture<S62159tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62159tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62159tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
