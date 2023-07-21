import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132093Page } from './s132093.page';

describe('S132093Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132093Page;
  let fixture: ComponentFixture<S132093Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132093Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132093Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
