import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56047Page } from './s56047.page';

describe('S56047Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56047Page;
  let fixture: ComponentFixture<S56047Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56047Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56047Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
