import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49045p1Page } from './s49045p1.page';

describe('S49045p1Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49045p1Page;
  let fixture: ComponentFixture<S49045p1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49045p1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49045p1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
