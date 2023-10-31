import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57007p1Page } from './s57007p1.page';

describe('S57007p1Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57007p1Page;
  let fixture: ComponentFixture<S57007p1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57007p1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57007p1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
