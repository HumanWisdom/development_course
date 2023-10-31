import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57066Page } from './s57066.page';

describe('S57066Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57066Page;
  let fixture: ComponentFixture<S57066Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57066Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57066Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
