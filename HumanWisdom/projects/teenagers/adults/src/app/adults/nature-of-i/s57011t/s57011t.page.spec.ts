import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57011tPage } from './s57011t.page';

describe('S57011tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57011tPage;
  let fixture: ComponentFixture<S57011tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57011tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57011tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
