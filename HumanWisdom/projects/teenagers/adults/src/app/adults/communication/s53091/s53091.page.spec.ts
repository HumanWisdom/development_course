import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53091Page } from './s53091.page';

describe('S53091Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53091Page;
  let fixture: ComponentFixture<S53091Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53091Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53091Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
