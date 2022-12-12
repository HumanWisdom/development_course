import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57063Page } from './s57063.page';

describe('S57063Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57063Page;
  let fixture: ComponentFixture<S57063Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57063Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57063Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
