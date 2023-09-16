import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141110Page } from './s141110.page';

describe('S141110Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141110Page;
  let fixture: ComponentFixture<S141110Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141110Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141110Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
