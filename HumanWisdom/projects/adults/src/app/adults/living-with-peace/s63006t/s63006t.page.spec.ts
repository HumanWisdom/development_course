import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63006tPage } from './s63006t.page';

describe('S63006tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63006tPage;
  let fixture: ComponentFixture<S63006tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63006tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63006tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
