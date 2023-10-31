import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45025Page } from './s45025.page';

describe('S45025Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45025Page;
  let fixture: ComponentFixture<S45025Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45025Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45025Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
