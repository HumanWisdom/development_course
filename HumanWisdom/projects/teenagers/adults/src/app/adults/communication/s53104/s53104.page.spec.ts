import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53104Page } from './s53104.page';

describe('S53104Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53104Page;
  let fixture: ComponentFixture<S53104Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53104Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53104Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
