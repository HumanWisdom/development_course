import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56006tPage } from './s56006t.page';

describe('S56006tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56006tPage;
  let fixture: ComponentFixture<S56006tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56006tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56006tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
