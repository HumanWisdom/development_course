import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141060Page } from './s141060.page';

describe('S141060Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141060Page;
  let fixture: ComponentFixture<S141060Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141060Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141060Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
