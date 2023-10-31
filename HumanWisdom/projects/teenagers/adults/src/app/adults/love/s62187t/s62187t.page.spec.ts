import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62187tPage } from './s62187t.page';

describe('S62187tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62187tPage;
  let fixture: ComponentFixture<S62187tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62187tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62187tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
