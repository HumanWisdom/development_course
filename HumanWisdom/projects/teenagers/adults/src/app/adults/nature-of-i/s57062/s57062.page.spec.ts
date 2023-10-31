import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57062Page } from './s57062.page';

describe('S57062Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57062Page;
  let fixture: ComponentFixture<S57062Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57062Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57062Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
