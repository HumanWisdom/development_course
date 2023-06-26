import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45087Page } from './s45087.page';

describe('S45087Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45087Page;
  let fixture: ComponentFixture<S45087Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45087Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45087Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
