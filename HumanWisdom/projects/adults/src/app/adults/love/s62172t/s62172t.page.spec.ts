import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62172tPage } from './s62172t.page';

describe('S62172tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62172tPage;
  let fixture: ComponentFixture<S62172tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62172tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62172tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
