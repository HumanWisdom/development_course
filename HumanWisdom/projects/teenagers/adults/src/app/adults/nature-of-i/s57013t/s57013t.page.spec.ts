import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57013tPage } from './s57013t.page';

describe('S57013tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57013tPage;
  let fixture: ComponentFixture<S57013tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57013tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57013tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
