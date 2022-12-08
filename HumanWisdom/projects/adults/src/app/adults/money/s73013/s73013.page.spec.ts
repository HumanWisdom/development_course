import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73013Page } from './s73013.page';

describe('S73013Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73013Page;
  let fixture: ComponentFixture<S73013Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73013Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73013Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
