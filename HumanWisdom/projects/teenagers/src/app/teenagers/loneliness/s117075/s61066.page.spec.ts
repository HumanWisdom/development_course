import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61066Page } from './s61066.page';

describe('S61066Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61066Page;
  let fixture: ComponentFixture<S61066Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61066Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61066Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
