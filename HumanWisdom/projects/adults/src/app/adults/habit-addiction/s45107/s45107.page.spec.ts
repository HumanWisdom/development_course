import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45107Page } from './s45107.page';

describe('S45107Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45107Page;
  let fixture: ComponentFixture<S45107Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45107Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45107Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
