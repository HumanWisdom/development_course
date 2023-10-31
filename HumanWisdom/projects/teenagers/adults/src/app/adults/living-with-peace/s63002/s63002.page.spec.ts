import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63002Page } from './s63002.page';

describe('S63002Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63002Page;
  let fixture: ComponentFixture<S63002Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63002Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63002Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
