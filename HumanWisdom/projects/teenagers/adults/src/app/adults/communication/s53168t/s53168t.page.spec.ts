import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53168tPage } from './s53168t.page';

describe('S53168tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53168tPage;
  let fixture: ComponentFixture<S53168tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53168tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53168tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
