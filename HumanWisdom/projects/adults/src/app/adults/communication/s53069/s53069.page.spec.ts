import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53069Page } from './s53069.page';

describe('S53069Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53069Page;
  let fixture: ComponentFixture<S53069Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53069Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53069Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
