import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49065tPage } from './s49065t.page';

describe('S49065tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49065tPage;
  let fixture: ComponentFixture<S49065tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49065tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49065tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
