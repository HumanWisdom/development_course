import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63060Page } from './s63060.page';

describe('S63060Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63060Page;
  let fixture: ComponentFixture<S63060Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63060Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63060Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
