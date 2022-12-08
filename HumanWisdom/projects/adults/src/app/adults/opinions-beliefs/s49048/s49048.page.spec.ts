import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49048Page } from './s49048.page';

describe('S49048Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49048Page;
  let fixture: ComponentFixture<S49048Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49048Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49048Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
