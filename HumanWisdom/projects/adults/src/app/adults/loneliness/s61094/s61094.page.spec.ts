import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61094Page } from './s61094.page';

describe('S61094Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61094Page;
  let fixture: ComponentFixture<S61094Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61094Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61094Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
