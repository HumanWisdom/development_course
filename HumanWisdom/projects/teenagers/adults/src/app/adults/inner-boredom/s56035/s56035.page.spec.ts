import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56035Page } from './s56035.page';

describe('S56035Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56035Page;
  let fixture: ComponentFixture<S56035Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56035Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56035Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
