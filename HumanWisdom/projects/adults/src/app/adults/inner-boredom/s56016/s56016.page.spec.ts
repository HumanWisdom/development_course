import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56016Page } from './s56016.page';

describe('S56016Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56016Page;
  let fixture: ComponentFixture<S56016Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56016Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56016Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
