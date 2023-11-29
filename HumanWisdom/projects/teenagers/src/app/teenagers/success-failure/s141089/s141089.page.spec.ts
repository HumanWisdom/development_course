import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141089Page } from './s141089.page';

describe('S141089Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141089Page;
  let fixture: ComponentFixture<S141089Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141089Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141089Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
