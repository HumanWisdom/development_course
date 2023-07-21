import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132159tPage } from './s132159t.page';

describe('S132159tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132159tPage;
  let fixture: ComponentFixture<S132159tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132159tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132159tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
