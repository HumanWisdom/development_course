import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57050Page } from './s57050.page';

describe('S57050Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57050Page;
  let fixture: ComponentFixture<S57050Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57050Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57050Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
