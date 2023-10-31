import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53122Page } from './s53122.page';

describe('S53122Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53122Page;
  let fixture: ComponentFixture<S53122Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53122Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53122Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
