import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49045Page } from './s49045.page';

describe('S49045Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49045Page;
  let fixture: ComponentFixture<S49045Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49045Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49045Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
