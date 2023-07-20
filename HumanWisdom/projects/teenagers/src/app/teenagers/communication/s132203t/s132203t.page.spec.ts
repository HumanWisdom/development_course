import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132203tPage } from './s132203t.page';

describe('S132203tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132203tPage;
  let fixture: ComponentFixture<S132203tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132203tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132203tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
