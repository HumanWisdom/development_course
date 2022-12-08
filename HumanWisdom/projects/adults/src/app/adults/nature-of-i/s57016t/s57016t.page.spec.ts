import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57016tPage } from './s57016t.page';

describe('S57016tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57016tPage;
  let fixture: ComponentFixture<S57016tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57016tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57016tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
