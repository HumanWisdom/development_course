import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57060Page } from './s57060.page';

describe('S57060Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57060Page;
  let fixture: ComponentFixture<S57060Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57060Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57060Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
