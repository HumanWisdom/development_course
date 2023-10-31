import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63035Page } from './s63035.page';

describe('S63035Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63035Page;
  let fixture: ComponentFixture<S63035Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63035Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63035Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
