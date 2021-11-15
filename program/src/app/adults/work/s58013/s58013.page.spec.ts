import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58013Page } from './s58013.page';

describe('S58013Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58013Page;
  let fixture: ComponentFixture<S58013Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58013Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58013Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
