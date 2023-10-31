import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57005Page } from './s57005.page';

describe('S57005Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57005Page;
  let fixture: ComponentFixture<S57005Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57005Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57005Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
