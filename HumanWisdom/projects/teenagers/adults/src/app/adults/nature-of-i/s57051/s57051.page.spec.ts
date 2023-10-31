import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57051Page } from './s57051.page';

describe('S57051Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57051Page;
  let fixture: ComponentFixture<S57051Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57051Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57051Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
