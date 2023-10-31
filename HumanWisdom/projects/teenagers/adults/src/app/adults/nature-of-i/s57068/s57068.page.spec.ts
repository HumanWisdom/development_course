import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57068Page } from './s57068.page';

describe('S57068Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57068Page;
  let fixture: ComponentFixture<S57068Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57068Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57068Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
