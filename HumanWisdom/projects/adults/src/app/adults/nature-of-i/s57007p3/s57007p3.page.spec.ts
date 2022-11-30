import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57007p3Page } from './s57007p3.page';

describe('S57007p3Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57007p3Page;
  let fixture: ComponentFixture<S57007p3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57007p3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57007p3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
