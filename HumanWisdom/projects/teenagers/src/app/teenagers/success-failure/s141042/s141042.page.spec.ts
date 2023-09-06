import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141042Page } from './s141042.page';

describe('S141042Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141042Page;
  let fixture: ComponentFixture<S141042Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141042Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141042Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
