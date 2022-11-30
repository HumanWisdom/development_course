import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48028Page } from './s48028.page';

describe('S48028Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48028Page;
  let fixture: ComponentFixture<S48028Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48028Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48028Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
