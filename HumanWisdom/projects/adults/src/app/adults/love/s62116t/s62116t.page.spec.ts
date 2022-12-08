import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62116tPage } from './s62116t.page';

describe('S62116tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62116tPage;
  let fixture: ComponentFixture<S62116tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62116tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62116tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
