import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53066Page } from './s53066.page';

describe('S53066Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53066Page;
  let fixture: ComponentFixture<S53066Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53066Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53066Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
