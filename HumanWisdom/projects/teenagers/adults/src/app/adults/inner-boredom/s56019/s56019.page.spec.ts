import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56019Page } from './s56019.page';

describe('S56019Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56019Page;
  let fixture: ComponentFixture<S56019Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56019Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56019Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
