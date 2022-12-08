import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56005Page } from './s56005.page';

describe('S56005Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56005Page;
  let fixture: ComponentFixture<S56005Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56005Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56005Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
