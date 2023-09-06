import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141077Page } from './s141077.page';

describe('S141077Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141077Page;
  let fixture: ComponentFixture<S141077Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141077Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141077Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
