import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56024Page } from './s56024.page';

describe('S56024Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56024Page;
  let fixture: ComponentFixture<S56024Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56024Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56024Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
