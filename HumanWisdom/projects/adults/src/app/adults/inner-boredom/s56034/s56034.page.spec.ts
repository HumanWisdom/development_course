import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56034Page } from './s56034.page';

describe('S56034Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56034Page;
  let fixture: ComponentFixture<S56034Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56034Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56034Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
