import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56049Page } from './s56049.page';

describe('S56049Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56049Page;
  let fixture: ComponentFixture<S56049Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56049Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56049Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
