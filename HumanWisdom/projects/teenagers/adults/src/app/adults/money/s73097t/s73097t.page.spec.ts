import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73097tPage } from './s73097t.page';

describe('S73097tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73097tPage;
  let fixture: ComponentFixture<S73097tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73097tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73097tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
