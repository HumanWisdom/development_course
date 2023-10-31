import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63016Page } from './s63016.page';

describe('S63016Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63016Page;
  let fixture: ComponentFixture<S63016Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63016Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63016Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
