import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141055Page } from './s141055.page';

describe('S141055Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141055Page;
  let fixture: ComponentFixture<S141055Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141055Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141055Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
