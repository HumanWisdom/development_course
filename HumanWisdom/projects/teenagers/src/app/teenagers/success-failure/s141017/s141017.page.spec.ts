import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141017Page } from './s141017.page';

describe('S141017Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141017Page;
  let fixture: ComponentFixture<S141017Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141017Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141017Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
