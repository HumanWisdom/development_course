import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57028Page } from './s57028.page';

describe('S57028Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57028Page;
  let fixture: ComponentFixture<S57028Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57028Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57028Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
