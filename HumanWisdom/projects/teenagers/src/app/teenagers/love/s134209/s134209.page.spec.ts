import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134209Page } from './s134209.page';

describe('S134209Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134209Page;
  let fixture: ComponentFixture<S134209Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134209Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134209Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
