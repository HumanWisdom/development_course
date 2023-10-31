import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56009Page } from './s56009.page';

describe('S56009Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56009Page;
  let fixture: ComponentFixture<S56009Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56009Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56009Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
