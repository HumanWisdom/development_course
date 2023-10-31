import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56036Page } from './s56036.page';

describe('S56036Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56036Page;
  let fixture: ComponentFixture<S56036Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56036Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56036Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
