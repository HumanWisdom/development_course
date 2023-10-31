import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56010Page } from './s56010.page';

describe('S56010Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56010Page;
  let fixture: ComponentFixture<S56010Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56010Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56010Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
