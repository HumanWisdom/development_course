import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132185tPage } from './s132185t.page';

describe('S132185tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132185tPage;
  let fixture: ComponentFixture<S132185tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132185tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132185tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
