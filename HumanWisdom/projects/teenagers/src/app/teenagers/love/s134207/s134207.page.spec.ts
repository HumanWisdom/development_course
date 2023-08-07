import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134207Page } from './s134207.page';

describe('S134207Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134207Page;
  let fixture: ComponentFixture<S134207Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134207Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134207Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
