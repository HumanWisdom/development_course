import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S51003Page } from './s51003.page';

describe('S51003Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S51003Page;
  let fixture: ComponentFixture<S51003Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S51003Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S51003Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
