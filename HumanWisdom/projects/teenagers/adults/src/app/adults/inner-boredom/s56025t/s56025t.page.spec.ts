import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56025tPage } from './s56025t.page';

describe('S56025tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56025tPage;
  let fixture: ComponentFixture<S56025tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56025tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56025tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
