import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57037Page } from './s57037.page';

describe('S57037Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57037Page;
  let fixture: ComponentFixture<S57037Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57037Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57037Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
