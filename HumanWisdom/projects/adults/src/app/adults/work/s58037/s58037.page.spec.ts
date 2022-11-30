import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58037Page } from './s58037.page';

describe('S58037Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58037Page;
  let fixture: ComponentFixture<S58037Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58037Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58037Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
