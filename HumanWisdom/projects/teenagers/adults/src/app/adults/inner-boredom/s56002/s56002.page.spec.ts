import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56002Page } from './s56002.page';

describe('S56002Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56002Page;
  let fixture: ComponentFixture<S56002Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56002Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56002Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
