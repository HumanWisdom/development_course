import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141006tPage } from './s141006t.page';

describe('S141006tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141006tPage;
  let fixture: ComponentFixture<S141006tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141006tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141006tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
