import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53033Page } from './s53033.page';

describe('S53033Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53033Page;
  let fixture: ComponentFixture<S53033Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53033Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53033Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
