import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57007tPage } from './s57007t.page';

describe('S57007tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57007tPage;
  let fixture: ComponentFixture<S57007tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57007tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57007tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
