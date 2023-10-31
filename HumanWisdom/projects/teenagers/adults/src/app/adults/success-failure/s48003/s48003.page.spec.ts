import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48003Page } from './s48003.page';

describe('S48003Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48003Page;
  let fixture: ComponentFixture<S48003Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48003Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48003Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
