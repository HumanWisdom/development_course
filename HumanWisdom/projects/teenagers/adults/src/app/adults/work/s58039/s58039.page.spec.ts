import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58039Page } from './s58039.page';

describe('S58039Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58039Page;
  let fixture: ComponentFixture<S58039Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58039Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58039Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
