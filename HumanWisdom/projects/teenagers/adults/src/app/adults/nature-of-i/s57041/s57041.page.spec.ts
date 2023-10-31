import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57041Page } from './s57041.page';

describe('S57041Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57041Page;
  let fixture: ComponentFixture<S57041Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57041Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57041Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
