import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49028Page } from './s49028.page';

describe('S49028Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49028Page;
  let fixture: ComponentFixture<S49028Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49028Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49028Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
