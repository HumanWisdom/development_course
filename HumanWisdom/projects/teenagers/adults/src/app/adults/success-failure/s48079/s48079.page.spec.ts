import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48079Page } from './s48079.page';

describe('S48079Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48079Page;
  let fixture: ComponentFixture<S48079Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48079Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48079Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
