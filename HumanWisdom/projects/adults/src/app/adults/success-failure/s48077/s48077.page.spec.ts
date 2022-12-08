import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48077Page } from './s48077.page';

describe('S48077Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48077Page;
  let fixture: ComponentFixture<S48077Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48077Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48077Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
