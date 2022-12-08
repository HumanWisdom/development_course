import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48091tPage } from './s48091t.page';

describe('S48091tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48091tPage;
  let fixture: ComponentFixture<S48091tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48091tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48091tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
