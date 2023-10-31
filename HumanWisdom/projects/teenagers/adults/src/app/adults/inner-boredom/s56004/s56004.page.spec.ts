import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56004Page } from './s56004.page';

describe('S56004Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56004Page;
  let fixture: ComponentFixture<S56004Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56004Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56004Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
