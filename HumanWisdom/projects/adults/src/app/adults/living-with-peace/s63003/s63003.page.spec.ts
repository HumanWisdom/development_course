import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63003Page } from './s63003.page';

describe('S63003Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63003Page;
  let fixture: ComponentFixture<S63003Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63003Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63003Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
