import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49057Page } from './s49057.page';

describe('S49057Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49057Page;
  let fixture: ComponentFixture<S49057Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49057Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49057Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
