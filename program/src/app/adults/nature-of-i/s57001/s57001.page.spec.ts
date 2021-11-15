import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57001Page } from './s57001.page';

describe('S57001Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57001Page;
  let fixture: ComponentFixture<S57001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
