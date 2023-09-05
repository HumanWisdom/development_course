import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141083Page } from './s141083.page';

describe('S141083Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141083Page;
  let fixture: ComponentFixture<S141083Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141083Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141083Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
