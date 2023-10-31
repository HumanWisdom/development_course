import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53195Page } from './s53195.page';

describe('S53195Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53195Page;
  let fixture: ComponentFixture<S53195Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53195Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53195Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
