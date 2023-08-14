import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134174Page } from './s134174.page';

describe('S134174Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134174Page;
  let fixture: ComponentFixture<S134174Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134174Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134174Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
