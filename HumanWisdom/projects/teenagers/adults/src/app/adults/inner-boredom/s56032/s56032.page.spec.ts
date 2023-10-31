import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56032Page } from './s56032.page';

describe('S56032Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56032Page;
  let fixture: ComponentFixture<S56032Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56032Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56032Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
