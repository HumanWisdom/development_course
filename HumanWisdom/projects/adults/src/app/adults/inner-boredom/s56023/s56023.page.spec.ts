import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56023Page } from './s56023.page';

describe('S56023Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56023Page;
  let fixture: ComponentFixture<S56023Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56023Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56023Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
