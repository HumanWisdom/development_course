import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18066Page } from './s18066.page';

describe('S18066Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18066Page;
  let fixture: ComponentFixture<S18066Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18066Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18066Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
