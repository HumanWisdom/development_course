import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18081Page } from './s18081.page';

describe('S18081Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18081Page;
  let fixture: ComponentFixture<S18081Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18081Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18081Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
