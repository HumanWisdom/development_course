import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57007p4Page } from './s57007p4.page';

describe('S57007p4Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57007p4Page;
  let fixture: ComponentFixture<S57007p4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57007p4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57007p4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
