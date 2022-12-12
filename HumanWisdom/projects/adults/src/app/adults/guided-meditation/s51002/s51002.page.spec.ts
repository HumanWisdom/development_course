import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S51002Page } from './s51002.page';

describe('S51002Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S51002Page;
  let fixture: ComponentFixture<S51002Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S51002Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S51002Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
