import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132115Page } from './s132115.page';

describe('S132115Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132115Page;
  let fixture: ComponentFixture<S132115Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132115Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132115Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
