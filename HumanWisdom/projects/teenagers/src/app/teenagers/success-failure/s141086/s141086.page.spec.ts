import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141086Page } from './s141086.page';

describe('S141086Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141086Page;
  let fixture: ComponentFixture<S141086Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141086Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141086Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
