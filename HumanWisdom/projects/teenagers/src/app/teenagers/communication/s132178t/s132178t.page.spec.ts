import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132178tPage } from './s132178t.page';

describe('S132178tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132178tPage;
  let fixture: ComponentFixture<S132178tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132178tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132178tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
