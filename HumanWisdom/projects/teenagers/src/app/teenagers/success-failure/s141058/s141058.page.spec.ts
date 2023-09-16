import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141058Page } from './s141058.page';

describe('S141058Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141058Page;
  let fixture: ComponentFixture<S141058Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141058Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141058Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
