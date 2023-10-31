import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57045Page } from './s57045.page';

describe('S57045Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57045Page;
  let fixture: ComponentFixture<S57045Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57045Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57045Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
