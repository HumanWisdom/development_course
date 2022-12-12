import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56040Page } from './s56040.page';

describe('S56040Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56040Page;
  let fixture: ComponentFixture<S56040Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56040Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56040Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
