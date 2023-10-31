import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63070Page } from './s63070.page';

describe('S63070Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63070Page;
  let fixture: ComponentFixture<S63070Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63070Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63070Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
