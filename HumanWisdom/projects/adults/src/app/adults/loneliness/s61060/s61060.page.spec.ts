import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61060Page } from './s61060.page';

describe('S61060Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61060Page;
  let fixture: ComponentFixture<S61060Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61060Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61060Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
