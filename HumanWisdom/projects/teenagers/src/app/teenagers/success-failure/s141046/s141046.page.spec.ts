import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141046Page } from './s141046.page';

describe('S141046Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141046Page;
  let fixture: ComponentFixture<S141046Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141046Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141046Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
