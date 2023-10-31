import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56040tPage } from './s56040t.page';

describe('S56040tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56040tPage;
  let fixture: ComponentFixture<S56040tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56040tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56040tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
