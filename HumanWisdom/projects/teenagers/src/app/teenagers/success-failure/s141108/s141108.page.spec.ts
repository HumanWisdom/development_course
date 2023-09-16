import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141108Page } from './s141108.page';

describe('S141108Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141108Page;
  let fixture: ComponentFixture<S141108Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141108Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141108Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
