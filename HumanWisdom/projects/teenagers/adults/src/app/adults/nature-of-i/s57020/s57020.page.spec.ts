import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57020Page } from './s57020.page';

describe('S57020Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57020Page;
  let fixture: ComponentFixture<S57020Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57020Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57020Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
