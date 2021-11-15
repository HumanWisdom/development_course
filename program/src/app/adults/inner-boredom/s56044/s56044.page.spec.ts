import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56044Page } from './s56044.page';

describe('S56044Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56044Page;
  let fixture: ComponentFixture<S56044Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56044Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56044Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
