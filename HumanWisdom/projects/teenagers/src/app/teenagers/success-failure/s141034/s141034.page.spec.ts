import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141034Page } from './s141034.page';

describe('S141034Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141034Page;
  let fixture: ComponentFixture<S141034Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141034Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141034Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
