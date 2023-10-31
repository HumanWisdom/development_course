import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56028Page } from './s56028.page';

describe('S56028Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56028Page;
  let fixture: ComponentFixture<S56028Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56028Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56028Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
