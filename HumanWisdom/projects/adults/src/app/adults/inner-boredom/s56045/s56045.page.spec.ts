import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56045Page } from './s56045.page';

describe('S56045Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56045Page;
  let fixture: ComponentFixture<S56045Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56045Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56045Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
