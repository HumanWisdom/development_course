import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134204Page } from './s134204.page';

describe('S134204Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134204Page;
  let fixture: ComponentFixture<S134204Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134204Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134204Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
