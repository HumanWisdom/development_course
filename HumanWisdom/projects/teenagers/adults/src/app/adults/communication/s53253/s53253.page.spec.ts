import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53253Page } from './s53253.page';

describe('S53253Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53253Page;
  let fixture: ComponentFixture<S53253Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53253Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53253Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
