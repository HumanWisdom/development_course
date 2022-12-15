import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18002Page } from './s18002.page';

describe('S18002Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18002Page;
  let fixture: ComponentFixture<S18002Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18002Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18002Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
