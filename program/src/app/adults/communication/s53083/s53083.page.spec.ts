import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53083Page } from './s53083.page';

describe('S53083Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53083Page;
  let fixture: ComponentFixture<S53083Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53083Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53083Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
