import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56011Page } from './s56011.page';

describe('S56011Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56011Page;
  let fixture: ComponentFixture<S56011Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56011Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56011Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
