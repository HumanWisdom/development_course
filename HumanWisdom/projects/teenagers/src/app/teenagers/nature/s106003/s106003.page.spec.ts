import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S106003Page } from './s106003.page';

describe('S106003Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S106003Page;
  let fixture: ComponentFixture<S106003Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S106003Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S106003Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
