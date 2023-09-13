import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141092Page } from './s141092.page';

describe('S141092Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141092Page;
  let fixture: ComponentFixture<S141092Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141092Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141092Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
