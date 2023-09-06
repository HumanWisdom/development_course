import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141021Page } from './s141021.page';

describe('S141021Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141021Page;
  let fixture: ComponentFixture<S141021Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141021Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141021Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
