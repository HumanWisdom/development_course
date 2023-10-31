import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61003Page } from './s61003.page';

describe('S61003Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61003Page;
  let fixture: ComponentFixture<S61003Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61003Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61003Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
