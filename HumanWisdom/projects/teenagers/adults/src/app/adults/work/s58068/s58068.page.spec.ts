import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58068Page } from './s58068.page';

describe('S58068Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58068Page;
  let fixture: ComponentFixture<S58068Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58068Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58068Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
