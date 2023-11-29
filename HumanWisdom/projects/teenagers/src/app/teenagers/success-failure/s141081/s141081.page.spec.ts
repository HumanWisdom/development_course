import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141081Page } from './s141081.page';

describe('S141081Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141081Page;
  let fixture: ComponentFixture<S141081Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141081Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141081Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
