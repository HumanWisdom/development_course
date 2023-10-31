import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45003Page } from './s45003.page';

describe('S45003Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45003Page;
  let fixture: ComponentFixture<S45003Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45003Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45003Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
