import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141001Page } from './s141001.page';

describe('S141001Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141001Page;
  let fixture: ComponentFixture<S141001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
