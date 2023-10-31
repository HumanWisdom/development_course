import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57057Page } from './s57057.page';

describe('S57057Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57057Page;
  let fixture: ComponentFixture<S57057Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57057Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57057Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
