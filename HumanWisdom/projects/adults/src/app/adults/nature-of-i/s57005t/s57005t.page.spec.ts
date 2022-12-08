import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57005tPage } from './s57005t.page';

describe('S57005tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57005tPage;
  let fixture: ComponentFixture<S57005tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57005tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57005tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
