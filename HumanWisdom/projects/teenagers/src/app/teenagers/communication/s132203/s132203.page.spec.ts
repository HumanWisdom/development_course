import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132203Page } from './s132203.page';

describe('S132203Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132203Page;
  let fixture: ComponentFixture<S132203Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132203Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132203Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
