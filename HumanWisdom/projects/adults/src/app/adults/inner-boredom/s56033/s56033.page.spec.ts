import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56033Page } from './s56033.page';

describe('S56033Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56033Page;
  let fixture: ComponentFixture<S56033Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56033Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56033Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
