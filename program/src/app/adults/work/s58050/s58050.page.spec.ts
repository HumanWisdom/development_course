import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58050Page } from './s58050.page';

describe('S58050Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58050Page;
  let fixture: ComponentFixture<S58050Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58050Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58050Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
