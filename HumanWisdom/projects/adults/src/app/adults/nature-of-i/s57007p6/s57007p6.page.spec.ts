import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57007p6Page } from './s57007p6.page';

describe('S57007p6Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57007p6Page;
  let fixture: ComponentFixture<S57007p6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57007p6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57007p6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
