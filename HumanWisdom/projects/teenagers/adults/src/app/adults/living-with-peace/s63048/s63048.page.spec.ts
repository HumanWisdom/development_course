import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63048Page } from './s63048.page';

describe('S63048Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63048Page;
  let fixture: ComponentFixture<S63048Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63048Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63048Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
