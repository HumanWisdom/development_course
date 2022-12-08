import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63062Page } from './s63062.page';

describe('S63062Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63062Page;
  let fixture: ComponentFixture<S63062Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63062Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63062Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
