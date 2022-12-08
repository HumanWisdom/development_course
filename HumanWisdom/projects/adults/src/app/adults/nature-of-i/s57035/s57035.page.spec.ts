import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57035Page } from './s57035.page';

describe('S57035Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57035Page;
  let fixture: ComponentFixture<S57035Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57035Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57035Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
