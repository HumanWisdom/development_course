import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141111Page } from './s141111.page';

describe('S141111Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141111Page;
  let fixture: ComponentFixture<S141111Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141111Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141111Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
