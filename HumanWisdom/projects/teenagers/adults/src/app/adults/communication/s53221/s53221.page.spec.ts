import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53221Page } from './s53221.page';

describe('S53221Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53221Page;
  let fixture: ComponentFixture<S53221Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53221Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53221Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
