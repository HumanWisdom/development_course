import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134208Page } from './s134208.page';

describe('S134208Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134208Page;
  let fixture: ComponentFixture<S134208Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134208Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134208Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
