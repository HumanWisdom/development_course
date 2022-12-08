import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56015Page } from './s56015.page';

describe('S56015Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56015Page;
  let fixture: ComponentFixture<S56015Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56015Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56015Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
