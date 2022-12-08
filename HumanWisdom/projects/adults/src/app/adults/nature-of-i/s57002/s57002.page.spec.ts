import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57002Page } from './s57002.page';

describe('S57002Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57002Page;
  let fixture: ComponentFixture<S57002Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57002Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57002Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
