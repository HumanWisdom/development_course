import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141014Page } from './s141014.page';

describe('S141014Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141014Page;
  let fixture: ComponentFixture<S141014Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141014Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141014Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
