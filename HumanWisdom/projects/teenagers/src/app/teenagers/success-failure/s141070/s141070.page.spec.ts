import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141070Page } from './s141070.page';

describe('S141070Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141070Page;
  let fixture: ComponentFixture<S141070Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141070Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141070Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
