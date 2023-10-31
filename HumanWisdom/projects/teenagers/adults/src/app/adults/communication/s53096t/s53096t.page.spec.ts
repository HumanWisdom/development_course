import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53096tPage } from './s53096t.page';

describe('S53096tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53096tPage;
  let fixture: ComponentFixture<S53096tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53096tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53096tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
