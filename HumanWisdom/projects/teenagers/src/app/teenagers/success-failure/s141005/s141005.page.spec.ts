import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141005Page } from './s141005.page';

describe('S141005Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141005Page;
  let fixture: ComponentFixture<S141005Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141005Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141005Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
