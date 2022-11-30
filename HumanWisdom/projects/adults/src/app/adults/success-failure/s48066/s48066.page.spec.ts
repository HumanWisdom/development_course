import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48066Page } from './s48066.page';

describe('S48066Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48066Page;
  let fixture: ComponentFixture<S48066Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48066Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48066Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
