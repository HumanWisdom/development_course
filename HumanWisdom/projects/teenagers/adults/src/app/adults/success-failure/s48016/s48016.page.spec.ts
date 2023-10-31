import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48016Page } from './s48016.page';

describe('S48016Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48016Page;
  let fixture: ComponentFixture<S48016Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48016Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48016Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
