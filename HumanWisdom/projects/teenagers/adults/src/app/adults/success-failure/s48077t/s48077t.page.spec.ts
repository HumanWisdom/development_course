import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48077tPage } from './s48077t.page';

describe('S48077tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48077tPage;
  let fixture: ComponentFixture<S48077tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48077tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48077tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
