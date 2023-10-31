import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48097tPage } from './s48097t.page';

describe('S48097tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48097tPage;
  let fixture: ComponentFixture<S48097tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48097tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48097tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
