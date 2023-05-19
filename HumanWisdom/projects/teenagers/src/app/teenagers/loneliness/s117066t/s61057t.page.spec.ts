import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61177tPage } from './s61177t.page';

describe('S61177tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61177tPage;
  let fixture: ComponentFixture<S61177tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61177tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61177tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
