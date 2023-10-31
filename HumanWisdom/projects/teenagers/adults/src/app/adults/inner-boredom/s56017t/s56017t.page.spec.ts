import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56017tPage } from './s56017t.page';

describe('S56017tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56017tPage;
  let fixture: ComponentFixture<S56017tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56017tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56017tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
