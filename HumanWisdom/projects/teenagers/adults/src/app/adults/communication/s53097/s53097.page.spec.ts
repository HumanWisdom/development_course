import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53097Page } from './s53097.page';

describe('S53097Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53097Page;
  let fixture: ComponentFixture<S53097Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53097Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53097Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
