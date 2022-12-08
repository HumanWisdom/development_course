import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53140Page } from './s53140.page';

describe('S53140Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53140Page;
  let fixture: ComponentFixture<S53140Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53140Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53140Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
