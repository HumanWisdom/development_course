import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56001Page } from './s56001.page';

describe('S56001Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56001Page;
  let fixture: ComponentFixture<S56001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
