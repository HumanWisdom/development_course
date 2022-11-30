import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56033tPage } from './s56033t.page';

describe('S56033tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56033tPage;
  let fixture: ComponentFixture<S56033tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56033tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56033tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
