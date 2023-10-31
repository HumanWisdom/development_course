import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63041tPage } from './s63041t.page';

describe('S63041tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63041tPage;
  let fixture: ComponentFixture<S63041tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63041tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63041tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
