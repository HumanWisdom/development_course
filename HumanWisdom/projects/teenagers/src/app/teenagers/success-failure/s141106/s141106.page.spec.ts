import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141106Page } from './s141106.page';

describe('S141106Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141106Page;
  let fixture: ComponentFixture<S141106Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141106Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141106Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
