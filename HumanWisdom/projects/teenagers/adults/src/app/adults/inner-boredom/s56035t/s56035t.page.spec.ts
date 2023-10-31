import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56035tPage } from './s56035t.page';

describe('S56035tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56035tPage;
  let fixture: ComponentFixture<S56035tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56035tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56035tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
