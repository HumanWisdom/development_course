import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58059Page } from './s58059.page';

describe('S58059Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58059Page;
  let fixture: ComponentFixture<S58059Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58059Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58059Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
