import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57055tPage } from './s57055t.page';

describe('S57055tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57055tPage;
  let fixture: ComponentFixture<S57055tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57055tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57055tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
