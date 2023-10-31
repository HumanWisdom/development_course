import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56021Page } from './s56021.page';

describe('S56021Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56021Page;
  let fixture: ComponentFixture<S56021Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56021Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56021Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
