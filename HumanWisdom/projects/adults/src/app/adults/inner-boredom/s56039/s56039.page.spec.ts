import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56039Page } from './s56039.page';

describe('S56039Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56039Page;
  let fixture: ComponentFixture<S56039Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56039Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56039Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
