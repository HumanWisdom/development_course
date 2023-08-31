import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140025Page } from './s140025.page';

describe('S140025Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140025Page;
  let fixture: ComponentFixture<S140025Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140025Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140025Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
