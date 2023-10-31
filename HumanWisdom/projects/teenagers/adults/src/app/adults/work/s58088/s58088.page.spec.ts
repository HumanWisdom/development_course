import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58088Page } from './s58088.page';

describe('S58088Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58088Page;
  let fixture: ComponentFixture<S58088Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58088Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58088Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
