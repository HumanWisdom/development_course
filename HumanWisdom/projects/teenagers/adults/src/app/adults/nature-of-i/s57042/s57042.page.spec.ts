import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57042Page } from './s57042.page';

describe('S57042Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57042Page;
  let fixture: ComponentFixture<S57042Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57042Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57042Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
