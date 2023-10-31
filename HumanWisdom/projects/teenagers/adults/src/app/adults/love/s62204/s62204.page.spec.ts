import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62204Page } from './s62204.page';

describe('S62204Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62204Page;
  let fixture: ComponentFixture<S62204Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62204Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62204Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
