import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48065tPage } from './s48065t.page';

describe('S48065tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48065tPage;
  let fixture: ComponentFixture<S48065tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48065tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48065tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
