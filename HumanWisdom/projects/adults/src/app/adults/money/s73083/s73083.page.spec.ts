import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73083Page } from './s73083.page';

describe('S73083Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73083Page;
  let fixture: ComponentFixture<S73083Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73083Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73083Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
