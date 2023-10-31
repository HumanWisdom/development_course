import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56037Page } from './s56037.page';

describe('S56037Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56037Page;
  let fixture: ComponentFixture<S56037Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56037Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56037Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
