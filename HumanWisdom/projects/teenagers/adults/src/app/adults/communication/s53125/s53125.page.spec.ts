import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53125Page } from './s53125.page';

describe('S53125Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53125Page;
  let fixture: ComponentFixture<S53125Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53125Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53125Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
