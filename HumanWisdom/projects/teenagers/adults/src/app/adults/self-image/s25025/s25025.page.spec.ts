import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25025Page } from './s25025.page';

describe('S25025Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25025Page;
  let fixture: ComponentFixture<S25025Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25025Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25025Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
