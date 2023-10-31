import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63055tPage } from './s63055t.page';

describe('S63055tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63055tPage;
  let fixture: ComponentFixture<S63055tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63055tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63055tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
