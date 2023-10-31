import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56037tPage } from './s56037t.page';

describe('S56037tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56037tPage;
  let fixture: ComponentFixture<S56037tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56037tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56037tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
