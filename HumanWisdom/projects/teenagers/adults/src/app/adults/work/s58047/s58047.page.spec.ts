import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58047Page } from './s58047.page';

describe('S58047Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58047Page;
  let fixture: ComponentFixture<S58047Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58047Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58047Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
