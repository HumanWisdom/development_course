import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63042Page } from './s63042.page';

describe('S63042Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63042Page;
  let fixture: ComponentFixture<S63042Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63042Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63042Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
