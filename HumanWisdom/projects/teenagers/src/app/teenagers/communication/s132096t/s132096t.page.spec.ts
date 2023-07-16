import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132096tPage } from './s132096t.page';

describe('S132096tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132096tPage;
  let fixture: ComponentFixture<S132096tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132096tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132096tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
