import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61006tPage } from './s61006t.page';

describe('S61006tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61006tPage;
  let fixture: ComponentFixture<S61006tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61006tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61006tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
