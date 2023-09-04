import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141044Page } from './s141044.page';

describe('S141044Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141044Page;
  let fixture: ComponentFixture<S141044Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141044Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141044Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
