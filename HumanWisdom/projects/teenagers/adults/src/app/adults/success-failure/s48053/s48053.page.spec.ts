import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48053Page } from './s48053.page';

describe('S48053Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48053Page;
  let fixture: ComponentFixture<S48053Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48053Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48053Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
