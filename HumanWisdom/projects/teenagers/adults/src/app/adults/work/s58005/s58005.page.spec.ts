import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58005Page } from './s58005.page';

describe('S58005Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58005Page;
  let fixture: ComponentFixture<S58005Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58005Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58005Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
