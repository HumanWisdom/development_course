import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56006Page } from './s56006.page';

describe('S56006Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56006Page;
  let fixture: ComponentFixture<S56006Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56006Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56006Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
