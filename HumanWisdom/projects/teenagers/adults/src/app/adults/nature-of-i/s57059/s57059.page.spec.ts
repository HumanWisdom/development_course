import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57059Page } from './s57059.page';

describe('S57059Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57059Page;
  let fixture: ComponentFixture<S57059Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57059Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57059Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
