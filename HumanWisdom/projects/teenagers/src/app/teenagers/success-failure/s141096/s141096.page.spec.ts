import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141096Page } from './s141096.page';

describe('S141096Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141096Page;
  let fixture: ComponentFixture<S141096Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141096Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141096Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
