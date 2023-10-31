import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57007p2Page } from './s57007p2.page';

describe('S57007p2Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57007p2Page;
  let fixture: ComponentFixture<S57007p2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57007p2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57007p2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
