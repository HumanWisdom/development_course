import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57004Page } from './s57004.page';

describe('S57004Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57004Page;
  let fixture: ComponentFixture<S57004Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57004Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57004Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
