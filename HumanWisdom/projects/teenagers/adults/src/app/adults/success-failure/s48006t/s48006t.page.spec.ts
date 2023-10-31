import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48006tPage } from './s48006t.page';

describe('S48006tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48006tPage;
  let fixture: ComponentFixture<S48006tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48006tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48006tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
