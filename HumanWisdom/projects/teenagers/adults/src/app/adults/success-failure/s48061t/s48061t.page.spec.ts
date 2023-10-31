import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48061tPage } from './s48061t.page';

describe('S48061tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48061tPage;
  let fixture: ComponentFixture<S48061tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48061tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48061tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
