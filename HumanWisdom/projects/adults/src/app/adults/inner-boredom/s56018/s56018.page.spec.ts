import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56018Page } from './s56018.page';

describe('S56018Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56018Page;
  let fixture: ComponentFixture<S56018Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56018Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56018Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
