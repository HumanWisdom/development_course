import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58020Page } from './s58020.page';

describe('S58020Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58020Page;
  let fixture: ComponentFixture<S58020Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58020Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58020Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
