import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141099Page } from './s141099.page';

describe('S141099Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141099Page;
  let fixture: ComponentFixture<S141099Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141099Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141099Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
