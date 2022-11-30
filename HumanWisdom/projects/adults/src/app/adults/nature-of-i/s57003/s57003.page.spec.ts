import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57003Page } from './s57003.page';

describe('S57003Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57003Page;
  let fixture: ComponentFixture<S57003Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57003Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57003Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
