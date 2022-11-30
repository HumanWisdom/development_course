import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57013Page } from './s57013.page';

describe('S57013Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57013Page;
  let fixture: ComponentFixture<S57013Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57013Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57013Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
