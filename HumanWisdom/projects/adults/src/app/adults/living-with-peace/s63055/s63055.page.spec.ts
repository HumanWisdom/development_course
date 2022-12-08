import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63055Page } from './s63055.page';

describe('S63055Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63055Page;
  let fixture: ComponentFixture<S63055Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63055Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63055Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
