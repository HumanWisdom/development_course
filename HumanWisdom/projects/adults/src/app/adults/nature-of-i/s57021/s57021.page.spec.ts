import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57021Page } from './s57021.page';

describe('S57021Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57021Page;
  let fixture: ComponentFixture<S57021Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57021Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57021Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
