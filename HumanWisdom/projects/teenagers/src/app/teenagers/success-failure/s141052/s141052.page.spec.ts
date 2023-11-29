import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141052Page } from './s141052.page';

describe('S141052Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141052Page;
  let fixture: ComponentFixture<S141052Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141052Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141052Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
