import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56038Page } from './s56038.page';

describe('S56038Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56038Page;
  let fixture: ComponentFixture<S56038Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56038Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56038Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
