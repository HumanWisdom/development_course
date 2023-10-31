import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46025Page } from './s46025.page';

describe('S46025Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46025Page;
  let fixture: ComponentFixture<S46025Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46025Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46025Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
